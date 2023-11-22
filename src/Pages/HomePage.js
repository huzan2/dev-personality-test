import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickStartButton = () => {
    navigate("/test");
  };
  return (
    /*
    return문 안에 html 작성하면 됨
    주의사항: 하나의 div로 전부 감싸져있어야 함
    구현 필요사항: 테스트 시작 버튼, 기타등등
     */
    <div>
      Home Page
      <div>
        <CustomButton title={"시작하기"} onClick={onClickStartButton} />
      </div>
    </div>
  );
};

export default HomePage;
