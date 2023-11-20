import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const TestPage = () => {
  const navigate = useNavigate();
  const onClickFinishButton = () => {
    navigate("/result");
  };
  return (
    <div>
      TestPage
      <div>
        <CustomButton title={"질문응답 끝"} onClick={onClickFinishButton} />
      </div>
    </div>
  );
};

export default TestPage;
