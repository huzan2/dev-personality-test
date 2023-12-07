const CustomBigButton = ({ type = "button", title, onClick }) => {
  return (
    <button
      className="flex w-[80%] mt-5 justify-center font-['Neo4'] rounded-full bg-BLUE_3 px-3 py-5 text-3xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mx-auto sm:max-w-sm"
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomBigButton;
