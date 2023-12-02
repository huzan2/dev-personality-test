import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const HomePage = () => {
  const navigate = useNavigate();
  const onClickStartButton = () => {
    navigate("/test");
  };
  const onClickShareButton = () => {
    navigate("/share");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px", fontSize: "35px" }}>
      상식 테스트
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <div>
          <CustomButton title={"시작하기"} onClick={onClickStartButton} />
        </div>

        <div>
          <CustomButton title={"공유하기"} onClick={onClickShareButton} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
