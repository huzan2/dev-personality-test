import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickStartButton = () => {
    navigate("/test");
  };
  return (
    <div>
      Home Page
      <div>
        <CustomButton title={"시작하기"} onClick={onClickStartButton} />
      </div>
    </div>
  );
};

export default HomePage;
