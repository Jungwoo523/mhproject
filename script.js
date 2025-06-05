document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드됨.");

  // 전화번호 클릭 시 전화연결
  const callButtons = document.querySelectorAll(".call-btn, .btn.call");
  callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "tel:010-1234-5678";
    });
  });

  // 카카오톡 상담
  const kakaoButtons = document.querySelectorAll(".btn.kakao");
  kakaoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.open("https://pf.kakao.com/_yourkakaolink", "_blank");
    });
  });

  // 메뉴 active 상태 (추후 JS 추가 가능)
});
