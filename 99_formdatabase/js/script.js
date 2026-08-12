const scriptURL =
  "https://script.google.com/macros/s/AKfycbwGKCWBPFsKP9n7SaLHQ3hhSwVxMhXJyVNIwojBAcQVtLxVJIL8VT91o0RHrYwAM_E6Xw/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      form.reset();

      msg.innerHTML = "정상적으로 제출되었습니다.";

      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    })
    .catch((error) => {
      console.error("Error!", error.message);
    });
});
