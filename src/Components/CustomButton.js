const CustomButton = ({ type = "button", title, onClick }) => {
  return (
    <button
      className="flex w-[80%] mt-5 justify-center font-['Neo4'] rounded-full bg-white px-3 py-7 text-lg leading-6 text-BLUE_3 shadow-sm hover:bg-BLUE_3 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mx-auto sm:max-w-sm"
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
