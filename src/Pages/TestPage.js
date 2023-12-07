import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import { ieq, nsq, tfq, pjq } from "../questions";
import { child, ref, set, get } from "firebase/database";
import { db } from "../util/firebase";
import Header from "../Components/Header";

const TestPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionArray, setQuestionsArray] = useState([]);
  const [mbti, setMbti] = useState(4444);
  const [temp, setTemp] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [progress, setProgress] = useState();
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
    setTemp(arr);
    setMbti(mbti - 10 ** (4 - questionArray[currentQuestion].id));
    pageMove();
  };
  const handleChoice2 = () => {
    // 2번 버튼 핸들링
    let arr = [...temp];
    arr[currentQuestion] = 2;
    setTemp(arr);
    setMbti(mbti + 10 ** (4 - questionArray[currentQuestion].id));
    pageMove();
  };
  const handleBackButton = () => {
    if (currentQuestion === 0) {
      navigate("/");
    }
    if (temp[currentQuestion - 1] === 1) {
      setMbti(mbti + 10 ** (questionArray[currentQuestion - 1].id - 1));
    } else if (temp[currentQuestion - 1] === 2) {
      setMbti(mbti - 10 ** (questionArray[currentQuestion - 1].id - 1));
    }
    setCurrentQuestion(currentQuestion - 1);
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

  /*
  map() 사용 대신 질문들을 List에 담은 다음 currentQuestion을 인덱스 번호로 활용해서 순서대로 접근 및 출력
   */

  return (
    <div>
      <Header />
      {loading ? (
        <div>로딩중이여</div>
      ) : (
        <div className="flex flex-col text-center items-center justify-center">
          {finished ? (
            <>
              <CustomButton title={"결과보기"} onClick={onClickResult} />
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="max-w-[80%] mt-20 mb-20">
                  <p className="font-['BitBit'] text-3xl text-gray-700">
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
      )}
    </div>
  );
};

export default TestPage;
