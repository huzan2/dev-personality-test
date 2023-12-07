/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BLUE_1: "#E4EDFC", //배경
        BLUE_2: "#B8CDE9", // footer 배경
        BLUE_3: "#719FD5", //시작하기 버튼, 선택지 onClick
        BLUE_4: "#8FB5DB", // 메인 로고 '개발자'
        WHITE: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
