import { useNavigate } from "react-router-dom";
import CustomBigButton from "../Components/CustomBigButton";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate("/");
  };
  return (
    <div className="justify-center items-center text-center flex flex-col">
      <p className="text-4xl font-['BitBit']">404 Not Found</p>
      <p className="text-lg font-['Neo3']">
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <CustomBigButton title={"메인으로"} onClick={onClickBackButton} />
    </div>
  );
};

export default NotFoundPage;
