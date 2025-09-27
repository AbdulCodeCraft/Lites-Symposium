const OrganizerCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center justify-start w-40 md:w-52 space-y-2">
      <img
        className="w-25 h-25 md:w-60 md:h-60 rounded-full object-cover shadow-md"
        src={image}
        alt={name}
      />
      <h1 className="text-sm md:text-lg font-medium text-center leading-snug">
        {name}
      </h1>
      <p className="text-xs md:text-sm text-center text-gray-400">{role}</p>
    </div>
  );
};

export default OrganizerCard;
