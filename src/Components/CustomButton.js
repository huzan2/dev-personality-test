const CustomButton = ({ type = "button", title, onClick }) => {
  return (
    <button
      className="flex w-full mt-5 justify-center rounded-md bg-BLUE_2 px-3 py-1.5 text-base leading-6 text-white shadow-sm hover:bg-BLUE_1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-BLUE_3 sm:mx-auto sm:w-full sm:max-w-sm"
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
