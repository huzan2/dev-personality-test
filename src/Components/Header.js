import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <div className="justify-center items-center text-center pt-4">
      <div
        className="text-4xl font-['BitBit'] cursor-pointer"
        onClick={onClickLogo}
      >
        <p className="font-outline-1 text-BLUE_3">개발자</p>
        <p className="font-outline-1 text-white">테스트</p>
      </div>
    </div>
  );
};

export default Header;
