import { Link } from "react-router-dom";

const FaqList = ({ onDelete, faqs }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq._id}
            className=" rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="font-medium">{faq.question}</h2>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/admin/edit-faq/${faq._id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Edit
              </Link>

              <button
                onClick={() => onDelete(faq._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
