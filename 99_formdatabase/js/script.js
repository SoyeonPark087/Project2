const scriptURL =
"https://script.google.com/macros/s/AKfycbwGKCWBPFsKP9n7SaLHQ3hhSwVxMhXJyVNIwojBAcQVtLxVJIL8VT91o0RHrYwAM_E6Xw/exec";

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })

    .then(function(response) {

        // 입력값 초기화
        form.reset();

        // 성공 메시지 표시
        msg.textContent = "성공적으로 제출되었습니다.";

        // 5초 뒤 메시지 제거
        setTimeout(function() {
            msg.textContent = "";
        }, 5000);

    })

    .catch(function(error) {

        console.error("Error!", error.message);

        msg.textContent = "제출 중 오류가 발생했습니다.";

    });

});
