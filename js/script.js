document.addEventListener("DOMContentLoaded", () => {
  // 1. Header 삽입 → 그 후에 햄버거 메뉴 연결
  fetch("/partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-container").innerHTML = html;

      const toggle = document.getElementById("hamburgerBtn");
      const nav = document.getElementById("mobileNav");

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("active");
        });
      }

      // 전화 버튼/카카오톡 버튼이 header 안에 있을 가능성 고려
      setupContactButtons();
    });

  // 2. Footer 삽입
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-container").innerHTML = html;
    });
});

// 3. 공통 버튼 바인딩 로직 → fetch 후에 호출 가능하도록 분리
function setupContactButtons() {
  const callButtons = document.querySelectorAll(".call-btn, .btn.call");
  callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "tel:010-1234-5678";
    });
  });

  const kakaoButtons = document.querySelectorAll(".btn.kakao");
kakaoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("https://pf.kakao.com/_xlxgVxb/chat", "_blank"); // 임시 테스트 링크
  });
});
}

// 4. 캐러셀 자동슬라이드 및 도트, 그리고 좌우 이동 화살표
function setupCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  let current = 0;
  let interval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  showSlide(0); // 초기화
}

document.addEventListener("DOMContentLoaded", () => {
  setupCarousel();
});
