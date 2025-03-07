// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize variables
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");
  const header = document.querySelector("header");
  const backToTop = document.querySelector(".back-to-top");
  const sections = document.querySelectorAll("section");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const currentYear = document.getElementById("currentYear");
  const cursor = document.querySelector(".cursor");

  // Set current year in footer
  if (currentYear) {
    currentYear.innerHTML = new Date().getFullYear();
  }

  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when a nav link is clicked
  navLinksItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    // Add scrolled class to header when scrolled down
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Show/hide back to top button
    if (window.scrollY > 500) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }

    // Active nav link based on scroll position
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinksItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Project filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all filter buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      // Show/hide project cards based on filter
      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 200);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.style.display = "none";
          }, 500);
        }
      });
    });
  });

  // Custom cursor effect
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // Add hover effect for links and buttons
    document.querySelectorAll("a, button").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });

      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });
  }

  // Initialize animation on scroll
  const animateElements = document.querySelectorAll(".animate");

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        const animationClass =
          element.getAttribute("data-animation") || "fade-in";
        element.classList.add(animationClass);
      }
    });
  }

  // Run on initial load
  checkScroll();

  // Run on scroll
  window.addEventListener("scroll", checkScroll);

  // Form submission handling
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // You can add custom validation or form processing here
      // This is a placeholder for form submission logic
      // Uncomment this for testing form submission visual feedback
      // e.preventDefault();
      // alert('Form submitted successfully!');
    });
  }

  // Initialize skill progress bars animation
  const progressBars = document.querySelectorAll(".progress");

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const width = bar.style.width;

      // Reset width to 0 first
      bar.style.width = "0%";

      // Animate to actual width
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    });
  }

  // Run progress bar animation on page load
  animateProgressBars();

  // Animate sections on scroll
  function animateSections() {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add("animate");

        // Animate section headers
        const header = section.querySelector(".section-header");
        if (header) header.classList.add("reveal");

        // Animate skill items
        const skillItems = section.querySelectorAll(".skill-item");
        skillItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("animate");
          }, 100 * index);
        });

        // Animate timeline items
        const timelineItems = section.querySelectorAll(".timeline-item");
        timelineItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("animate");
          }, 200 * index);
        });
      }
    });
  }

  // Magnetic button effect
  function initMagneticButtons() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      button.addEventListener("mousemove", function (e) {
        const position = button.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;

        button.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
      });

      button.addEventListener("mouseout", function () {
        button.style.transform = "translate(0px, 0px)";
      });
    });
  }

  // Enhanced cursor effect
  function enhanceCursor() {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const hoverElements = document.querySelectorAll(
      "a, button, .project-card, .skill-item, .tag"
    );

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });

      element.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });
  }

  // Run animation functions
  window.addEventListener("load", () => {
    animateSections();
    initMagneticButtons();
    enhanceCursor();
  });

  window.addEventListener("scroll", () => {
    animateSections();
  });
});
