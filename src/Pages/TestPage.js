import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const TestPage = () => {
  const navigate = useNavigate();
  const onClickFinishButton = () => {
    navigate("/result");
  };
  return (
    /*
    구현 필요사항: 질문 표시될 부분, 응답 버튼
     */
    <div>
      TestPage
      <div>
        <CustomButton title={"질문응답 끝"} onClick={onClickFinishButton} />
      </div>
    </div>
  );
};

export default TestPage;
