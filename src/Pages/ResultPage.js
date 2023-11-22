import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const ResultPage = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate("/");
  };
  return (
    /*
    구현 필요사항: 대충 테스트 결과 표시될 부분이랑 메인화면으로 돌아가기 버튼, 공유하기 버튼
     */
    <div>
      result page
      <div>
        <CustomButton title={"돌아가기"} onClick={onClickBackButton} />
      </div>
    </div>
  );
};

export default ResultPage;
