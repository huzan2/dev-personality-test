export const KakaoShare = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(`${process.env.REACT_APP_KAKAO_JS_API_KEY}`);
      console.log("kakao connenction refreshed");
    }
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "대충 제목",
        description: "개발자들 성깔테스트",
        imageUrl:
          "https://www.campusn.co.kr/data/photos/20200415/art_1586431811745_e7f32c.jpg",
        link: {
          mobileWebUrl: "http://localhost:3000",
          webUrl: "http://localhost:3000",
        },
      },
      buttons: [
        {
          title: "나도 검사할래",
          link: {
            mobileWebUrl: "http://localhost:3000",
            webUrl: "http://localhost:3000",
          },
        },
      ],
    });
  }
};
