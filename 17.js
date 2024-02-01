let ques = document.querySelectorAll(".ques");
let ans = document.querySelectorAll(".ans");

function toggleAnswer(index) {
    const isActive = ques[index].classList.contains("active");

    for (let q of ques) {
        q.classList.remove("active");
    }

    // for (let i = 0; i < ans.length; i++) {
    //     ans[i].style.display = "none";
    // }

    if (!isActive) {
        // ans[index].style.display = "block";
        ques[index].classList.add("active");
    }
}