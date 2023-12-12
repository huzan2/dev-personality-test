import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

/**
 * Atom = 전역 상태관리 라이브러리 Recoil에서 사용하는 데이터 단위
 * 다른 페이지에서도 전역변수처럼 해당 State를 불러오고 변화시킬 수 있음
 */

export const QuestionsState = atom({
  key: "QuestionsState", // 유니크 key값
  default: [], // 기본값
  effects_UNSTABLE: [persistAtom], // 새로고침해도 초기화되지 않도록 함
});

export const AnsweredState = atom({
  key: "AnsweredState",
  default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  effects_UNSTABLE: [persistAtom],
});

export const CurrentQuestion = atom({
  key: "CurrentQuestion",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const Mbti = atom({
  key: "Mbti",
  default: 4444,
  effects_UNSTABLE: [persistAtom],
});
