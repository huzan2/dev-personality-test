import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import { ieq, nsq, tfq, pjq } from "../questions";

const TestPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionArray, setQuestionsArray] = useState([]);
  const [mbti, setMbti] = useState(4444);
  const pageMove = () => {
    if (currentQuestion < questionArray.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };
  const handleChoice1 = () => {
    // 1번 버튼 핸들링
    setMbti(mbti - 10 ** (questionArray[currentQuestion].id - 1));
    pageMove();
  };
  const handleChoice2 = () => {
    // 2번 버튼 핸들링
    setMbti(mbti + 10 ** (questionArray[currentQuestion].id - 1));
    pageMove();
  };
  /*
  < mbti 산출 방식 >
  4444를 기본값으로 놓고 1번 버튼으로 -1, 2번 버튼으로 +1해서 쿼리스트링으로 전달
  천의 자리 숫자가 4보다 작으면 I, 크면 E
  백의 자리 숫자가 4보다 작으면 N, 크면 S
  십의 자리 숫자가 4보다 작으면 T, 크면 F
  일의 자리 숫자가 4보다 작으면 P, 크면 J
   */
  const selectQuestion = () => {
    // 질문 리스트 중에서 실제 표시할 질문 선택 후 배열 생성
    // 정해진 갯수 내에서 랜덤으로 선택하는 함수 구현 후 적용 예정
    setQuestionsArray([...ieq, ...nsq, ...tfq, ...pjq]);
  };
  useEffect(() => {
    setLoading(true);
    selectQuestion();
    setLoading(false);
  }, []);
  useEffect(() => {
    console.log(questionArray);
  }, [questionArray]);
  useEffect(() => {
    console.log(mbti);
  }, [mbti]);

  /*
  map() 사용 대신 질문들을 List에 담은 다음 currentQuestion을 인덱스 번호로 활용해서 순서대로 접근 및 출력
   */

  return (
    <>
      {loading ? (
        <div>로딩중이여</div>
      ) : (
        <div className="flex flex-col text-center mt-[50px] items-center justify-center">
          {finished ? (
            <>
              <CustomButton
                title={"결과보기"}
                onClick={() => {
                  navigate(`/result?n=${mbti}`);
                }}
              />
            </>
          ) : (
            <>
              <p className="text-3xl">상식 테스트</p>
              <div>
                <p>{questionArray[currentQuestion].text}</p>
                <CustomButton
                  title={questionArray[currentQuestion].choices[0]}
                  onClick={handleChoice1}
                />
                <CustomButton
                  title={questionArray[currentQuestion].choices[1]}
                  onClick={handleChoice2}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default TestPage;
