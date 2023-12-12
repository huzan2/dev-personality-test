import { useNavigate } from "react-router-dom";
import CustomBigButton from "../Components/CustomBigButton";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { db } from "../util/firebase";
import { ref, get, child } from "firebase/database";
import { setQuestions } from "../util/setQuestions";
import { useRecoilState } from "recoil";
import { CurrentQuestion, Mbti, QuestionsState } from "../util/Atom";

const HomePage = () => {
  const navigate = useNavigate();
  const [participation, setParticipation] = useState(0); // 참여자수
  const [Questions, setQuestionss] = useRecoilState(QuestionsState); // 질문 배열
  const [i, setI] = useRecoilState(CurrentQuestion); // 질문 인덱스(currentQuestion)
  const [m, setM] = useRecoilState(Mbti); // mbti (4444)
  const onClickStartButton = () => {
    navigate("/test");
  };
  useEffect(() => {
    const dbref = ref(db);
    get(child(dbref, "/count")).then((snapshot) => {
      if (snapshot.exists()) {
        setParticipation(snapshot.val());
      }
    });
    // firebase DB 연결하고 참여자수 받아오기
    setQuestions().then((result) => {
      setQuestionss(result);
    });
    setI(0);
    setM(4444);
    console.log(i, m, Questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // 질문 인덱스, 질문 배열, mbti 숫자(4444) 초기세팅
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-[20%]">
        <div className="flex gap-x-1 text-sm">
          <p className="font-['Neo2']">별것도 아닌일에</p>
          <p className="font-['Neo4']">'어?'</p>
          <p className="font-['Neo2']">금지</p>
        </div>
        <div className="text-8xl font-['BitBit'] mt-2 mb-20">
          <p className="font-outline-1 text-BLUE_3">개발자</p>
          <p className="font-outline-1 text-white">테스트</p>
        </div>
        <CustomBigButton title={"시작하기"} onClick={onClickStartButton} />
        <p className="mt-2 text-xs font-['Neo3'] text-gray-500">
          참여자수 {participation}명
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
