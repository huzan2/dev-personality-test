import { ieq, nsq, tfq, pjq } from "../questions";

export const setQuestions = async () => {
  let resultArr = [];
  const getRandomIndex = (arrSize) => {
    // 배열 크기를 받아서 랜덤한 3개 인덱스를 뽑아내서 배열에 담아 리턴하는 함수
    let temp = [];
    while (temp.length < 3) {
      let randomNum = Math.floor(Math.random() * (arrSize - 1));
      if (temp.indexOf(randomNum) === -1) {
        temp.push(randomNum);
      }
    }
    return temp;
  };
  let indexArr = getRandomIndex(ieq.length);
  for (let i = 0; i < 3; i++) {
    resultArr.push(ieq[indexArr[i]]);
  }
  indexArr = getRandomIndex(nsq.length);
  for (let i = 0; i < 3; i++) {
    resultArr.push(nsq[indexArr[i]]);
  }
  indexArr = getRandomIndex(tfq.length);
  for (let i = 0; i < 3; i++) {
    resultArr.push(tfq[indexArr[i]]);
  }
  indexArr = getRandomIndex(pjq.length);
  for (let i = 0; i < 3; i++) {
    resultArr.push(pjq[indexArr[i]]);
  }
  console.log(resultArr);
  //resultArr에 각 질문을 push한 후 리턴
  return resultArr;
};
