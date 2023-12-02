import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import { useEffect } from "react";
import { KakaoShare } from "../util/KakaoShare";
const kakao = window.Kakao;

const ResultPage = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate("/");
  };

  const onClickShareButton = () => {
    if (kakao.isInitialized()) {
      KakaoShare();
    }
  };

  useEffect(() => {
    kakao.cleanup();
    kakao.init(`${process.env.REACT_APP_KAKAO_JS_API_KEY}`); // 카카오 api 연결 및 초기화
    if (kakao.isInitialized()) {
      console.log("Kakao API connected");
      // 카카오 디벨로퍼스 연결 상태 확인
    }
  }, []);

  return (
    <div>
      <p className="text-center mt-2 text-4xl">result page</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
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
