const CustomButton = ({ type = "button", title, onClick }) => {
  return (
    <button
      className="flex relative w-[80%] h-24 mt-5 justify-center font-['Neo4'] rounded-full bg-white px-3 py-7 sm:text-lg text-base leading-6 text-BLUE_3 shadow-sm hover:bg-BLUE_3 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mx-auto sm:max-w-sm"
      type={type}
      onClick={onClick}
      style={{ whiteSpace: "pre-line" }} // 개행문자 인식
    >
      <p className="absolute top-1/2 -translate-y-1/2 px-3 w-full">{title}</p>
    </button>
  );
};

export default CustomButton;
