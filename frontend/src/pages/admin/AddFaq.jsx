import Input from "../../components/Input.jsx";
import TextArea from "../../components/TextArea.jsx";
import Options from "../../components/Options.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/faq";
const category = ["registration","events","food_and_breverages"]

const AddFaq = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [type, setType] = useState("registration");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchFaq = async () => {
        try {
          const res = await axios.get(`${API_URL}/${id}`);
          if (res.data.success) {
            setQuestion(res.data.faq.question);
            setAnswer(res.data.faq.answer);
            setType(res.data.faq.type);
          }
        } catch (err) {
          console.error("Error fetching FAQ:", err);
        }
      };
      fetchFaq();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await axios.put(`${API_URL}/${id}`, {
          question,
          answer,
          type,
        });
      } else {
        await axios.post(API_URL, {
          question,
          answer,
          type,
        });
      }

      navigate("/admin/faqs");
    } catch (err) {
      console.error("Error saving FAQ:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-7">
      <h1 className="text-4xl font-semibold">{id ? "Edit FAQ" : "Add FAQ"}</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          placeholder="Enter your question"
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <TextArea
          label="Answer"
          placeholder="Provide the answer to the question"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <Options
          label="Category"
          value={type}
          onChange={(e) => setType(e.target.value)}
          name={type}
          options={category}
        />

        <div className="space-x-6">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Saving..." : id ? "Update" : "Submit"}
          </button>

          <Link to={"/admin/faqs"} className="bg-gray-800 px-4 py-2 rounded-md">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddFaq;
