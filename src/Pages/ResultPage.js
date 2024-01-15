import { useNavigate, useSearchParams } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import { useEffect, useState } from "react";
import { KakaoShareResult } from "../util/KakaoShare";
import Footer from "../Components/Footer";
import { getMbti } from "../util/mbti";
const kakao = window.Kakao;

const ResultPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [mbti, setMbti] = useState();
  const onClickBackButton = () => {
    console.log(mbti);
    navigate("/");
  };

  const onClickShareButton = () => {
    if (kakao.isInitialized()) {
      KakaoShareResult(mbti);
    }
  };

  useEffect(() => {
    kakao.cleanup();
    kakao.init(`${process.env.REACT_APP_KAKAO_JS_API_KEY}`); // 카카오 api 연결 및 초기화
    if (kakao.isInitialized()) {
      console.log("Kakao API connected");
      // 카카오 디벨로퍼스 연결 상태 확인
    }
    setMbti(getMbti(searchParams.get("n"))); // 쿼리스트링 가져오기
  }, [searchParams]);

  return (
    <div>
      <p className="text-center text-4xl pt-32">result page</p>
      <p className="font-['BitBit'] text-4xl text-center py-16">{mbti}</p>
      <div className="flex flex-col items-center justify-center gap-4">
        <CustomButton title={"돌아가기"} onClick={onClickBackButton} />
        <button
          className="flex w-[80%] mt-5 justify-center font-['Neo4'] rounded-full bg-yellow-400 px-3 py-7 text-lg leading-6 text-white shadow-sm hover:bg-white hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 sm:mx-auto sm:max-w-sm"
          onClick={onClickShareButton}
        >
          카카오톡으로 검사결과 공유하기
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
