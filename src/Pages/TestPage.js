import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import { child, ref, set, get } from "firebase/database";
import { db } from "../util/firebase";
import Header from "../Components/Header";
import { useRecoilState } from "recoil";
import {
  AnsweredState,
  CurrentQuestion,
  Mbti,
  QuestionsState,
} from "../util/Atom";

const TestPage = () => {
  const navigate = useNavigate();
  const [finished, setFinished] = useState(false); // 12개 응답 모두 참여했는지 여부 확인
  const [currentQuestion, setCurrentQuestion] = useRecoilState(CurrentQuestion); // 현재 질문 인덱스(currentQuestion)
  const [mbti, setMbti] = useRecoilState(Mbti); // mbti 숫자
  const [temp, setTemp] = useRecoilState(AnsweredState); // 응답 결과 임시저장용 배열
  const [progress, setProgress] = useState(); // 진행도 확인용
  const [questionArray] = useRecoilState(QuestionsState); // 질문 배열
  const pageMove = () => {
    if (currentQuestion < questionArray.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };
  const handleChoice1 = () => {
    // 1번 버튼 핸들링
    let arr = [...temp];
    arr[currentQuestion] = 1;
    setTemp(arr); // temp 배열에 1번 응답 저장
    setMbti(mbti - 10 ** (4 - questionArray[currentQuestion].id));
    pageMove();
  };
  const handleChoice2 = () => {
    // 2번 버튼 핸들링
    let arr = [...temp];
    arr[currentQuestion] = 2;
    setTemp(arr); // temp 배열에 2번 응답 저장
    setMbti(mbti + 10 ** (4 - questionArray[currentQuestion].id));
    pageMove();
  };
  const handleBackButton = () => {
    if (currentQuestion === 0) {
      navigate("/"); // 첫 질문에서 돌아가기 클릭시 메인화면으로 이동
    }
    if (temp[currentQuestion - 1] === 1) {
      setMbti(mbti + 10 ** (4 - questionArray[currentQuestion - 1].id));
    } else if (temp[currentQuestion - 1] === 2) {
      setMbti(mbti - 10 ** (4 - questionArray[currentQuestion - 1].id));
    }
    // 이전 질문 응답에 따른 연산 되돌리기
    setCurrentQuestion(currentQuestion - 1); // 인덱스 1 감소
  };
  const onClickResult = async () => {
    const dbref = ref(db);
    await get(child(dbref, "/count"))
      .then((snapshot) => {
        set(dbref, {
          count: snapshot.val() + 1,
        });
      })
      .then(navigate(`/result?n=${mbti}`));
    // db에서 count 1 증가시키고 결과창으로 연결
  };
  useEffect(() => {
    setProgress((currentQuestion * 25) / 3);
  }, [currentQuestion]);
  useEffect(() => {
    console.log(mbti);
  }, [mbti]);
  /*
  < mbti 산출 방식 >
  4444를 기본값으로 놓고 1번 버튼으로 -1, 2번 버튼으로 +1해서 쿼리스트링으로 전달
  천의 자리 숫자가 4보다 작으면 I, 크면 E
  백의 자리 숫자가 4보다 작으면 N, 크면 S
  십의 자리 숫자가 4보다 작으면 T, 크면 F
  일의 자리 숫자가 4보다 작으면 P, 크면 J
   */

  /*
  map() 사용 대신 질문들을 List에 담은 다음 currentQuestion을 인덱스 번호로 활용해서 순서대로 접근 및 출력
   */

  return (
    <div>
      <Header />
      <div className="flex flex-col text-center items-center justify-center">
        {finished ? (
          <>
            <CustomButton title={"결과보기"} onClick={onClickResult} />
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="max-w-[80%] mt-20 mb-20">
                <p
                  className="font-['BitBit'] text-3xl text-gray-700"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {questionArray[currentQuestion].text}
                </p>
              </div>
              <CustomButton
                title={questionArray[currentQuestion].choices[0]}
                onClick={handleChoice1}
              />
              <CustomButton
                title={questionArray[currentQuestion].choices[1]}
                onClick={handleChoice2}
              />
              <CustomButton title={"뒤로가기"} onClick={handleBackButton} />
            </div>
            <div className="h-1 w-[80%] bg-gray-400 justify-center mx-auto mt-4">
              <div
                className="h-1 bg-indigo-500 justify-center"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
