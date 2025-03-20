document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for in-page navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  
    // Cookie Acceptance functionality
    const cookieNotice = document.querySelector(".cookie-notice");
    const acceptCookies = document.querySelector(".accept-cookies");
  
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieNotice.classList.add("show");
    }
  
    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieNotice.classList.remove("show");
      cookieNotice.style.display = "none";
    });
  
    // Enhanced hover interactions for CTA buttons and product cards
    document.querySelectorAll(".cta-btn, .product-card").forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style.transform = "scale(1.02)";
        element.style.transition = "transform 0.2s ease-in-out";
      });
      element.addEventListener("mouseout", () => {
        element.style.transform = "scale(1)";
        element.style.transition = "transform 0.2s ease-in-out";
      });
    });
  
  
      document.querySelectorAll(".feature-card").forEach((card) => {
        card.style.transform = `translateY(${scrolled * -0.1}px)`;
        card.style.transition = "transform 0.2s ease-in-out";
      });
    });

  