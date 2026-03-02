updateJobs();

let deleteButtons = document.querySelectorAll(".dlt-btn");

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
        let card = deleteButtons[i].parentElement.parentElement;
        card.remove();
        totalJob--;
        if (totalJob == 0) {
            document.getElementById("empty").hidden = false;
        }
        updateJobs();
    });
}

allBtn.addEventListener("click", function () {
    allSection.hidden = false;
    interviewSection.hidden = true;
    rejectedSection.hidden = true;

    allBtn.classList.remove("btn-soft");
    interviewBtn.classList.add("btn-soft");
    rejectedBtn.classList.add("btn-soft");

    updateJobs();
});
document.getElementById("interview-btn").addEventListener("click", function () {
    document.getElementById("all-sec").hidden = true;
    document.getElementById("interview-sec").hidden = false;
    document.getElementById("rejected-sec").hidden = true;

    document.getElementById("all-btn").classList.add("btn-soft");
    document.getElementById("interview-btn").classList.remove("btn-soft");
    document.getElementById("rejected-btn").classList.add("btn-soft");

    updateJobs();
});
document.getElementById("rejected-btn").addEventListener("click", function () {
    document.getElementById("all-sec").hidden = true;
    document.getElementById("interview-sec").hidden = true;
    document.getElementById("rejected-sec").hidden = false;

    document.getElementById("all-btn").classList.add("btn-soft");
    document.getElementById("interview-btn").classList.add("btn-soft");
    document.getElementById("rejected-btn").classList.remove("btn-soft");

    updateJobs();
});