import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const ResultPage = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate("/");
  };
  return (
    <div>
      result page
      <div>
        <CustomButton title={"돌아가기"} onClick={onClickBackButton} />
      </div>
    </div>
  );
};

export default ResultPage;
