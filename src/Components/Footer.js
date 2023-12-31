import { FaLink, FaFacebook } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { KakaoShare } from "../util/KakaoShare";
const Footer = () => {
  const handleCopyClipBoard = async () => {
    // 클립보드에 링크 복사
    try {
      await navigator.clipboard.writeText(
        "https://dev-personality-test.web.app/"
      );
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex fixed h-10 flex-col items-center justify-center max-w-lg mx-auto w-full bg-BLUE_2 bottom-0 z-10">
      <p className="relative bottom-9 text-xs font-['Neo3'] text-gray-700">
        테스트 공유하기!
      </p>
      <div className="relative bottom-8 flex justify-between gap-4">
        <div className="w-12 h-12 flex flex-col justify-evenly rounded-full bg-yellow-200 cursor-pointer">
          <RiKakaoTalkFill
            className="text-[#3B1F1E] w-8 h-auto mx-auto"
            onClick={KakaoShare}
          />
        </div>
        <div className="w-12 h-12 flex flex-col justify-evenly rounded-full bg-blue-300 cursor-pointer">
          <FaFacebook className=" text-white w-7 h-auto mx-auto" />
        </div>
        <div className="bg-gray-500 w-12 h-12 flex flex-col justify-evenly rounded-full cursor-pointer">
          <FaLink
            className=" text-white w-6 h-auto mx-auto"
            onClick={handleCopyClipBoard}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
