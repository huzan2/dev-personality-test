export const KakaoShare = () => {
  // 테스트 공유하기
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
        imageUrl: "https://i.ibb.co/X8D28sn/MainPage.jpg",
        link: {
          mobileWebUrl: "https://dev-personality-test.web.app",
          webUrl: "https://dev-personality-test.web.app",
        },
      },
      buttons: [
        {
          title: "테스트 바로가기",
          link: {
            mobileWebUrl: "https://dev-personality-test.web.app",
            webUrl: "https://dev-personality-test.web.app",
          },
        },
      ],
    });
  }
};

export const KakaoShareResult = () => {
  // 테스트 결과 공유하기
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(`${process.env.REACT_APP_KAKAO_JS_API_KEY}`);
      console.log("kakao connenction refreshed");
    }
    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "대충 검사결과",
        description: "대충 상세설명?",
        imageUrl: "https://i.ibb.co/X8D28sn/MainPage.jpg",
        link: {
          mobileWebUrl: "https://dev-personality-test.web.app",
          webUrl: "https://dev-personality-test.web.app",
        },
      },
      buttons: [
        {
          title: "나도 검사할래",
          link: {
            mobileWebUrl: "https://dev-personality-test.web.app",
            webUrl: "https://dev-personality-test.web.app",
          },
        },
      ],
    });
  }
};
