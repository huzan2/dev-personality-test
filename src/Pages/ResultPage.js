import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const ResultPage = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate("/");
  };

  const onClickShareButton = () => {
    navigate("/share");
  };

  return (
    /*
    구현 필요사항: 대충 테스트 결과 표시될 부분이랑 메인화면으로 돌아가기 버튼, 공유하기 버튼
     */
    <div>

      <div style={{textAlign: 'center', marginTop: '200px', fontSize: '35px' }}>
        result page
      </div>

      <div style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
        <div>
          <CustomButton title={"돌아가기"} onClick={onClickBackButton} />
        </div>
        
        <div>
          <CustomButton title={"공유하기"} onClick={onClickShareButton} />
        </div>
      </div>


    </div>
  );
};

export default ResultPage;
