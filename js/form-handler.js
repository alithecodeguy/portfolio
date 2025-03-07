// This is a placeholder for a form handler
// You can configure this file to handle form submissions via:
// 1. Formspree (https://formspree.io)
// 2. Netlify Forms (if hosted on Netlify)
// 3. A custom serverless function
// 4. Or any other form handling service

// Example using Formspree
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      // Uncomment this section and replace with your Formspree endpoint
      // event.preventDefault();
      // const formData = new FormData(form);
      // fetch("https://formspree.io/f/your-form-id", {
      //   method: "POST",
      //   body: formData,
      //   headers: {
      //     Accept: "application/json"
      //   }
      // })
      // .then(response => {
      //   if (response.ok) {
      //     form.reset();
      //     alert("Thanks for your message! I'll get back to you soon.");
      //   } else {
      //     alert("Oops! There was a problem sending your message.");
      //   }
      // })
      // .catch(error => {
      //   alert("Oops! There was a problem sending your message.");
      //   console.error(error);
      // });
    });
  }
});
