updateJobs();

let deleteButtons = document.querySelectorAll(".dlt-btn");

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
        let card = deleteButtons[i].parentElement.parentElement;
        card.remove();
        totalJob--;
        if (card.inInterview === true) {
            interview--;
        }
        if (card.inRejected === true) {
            rejected--;
        }
        if (totalJob == 0) {
            document.getElementById("empty").hidden = false;
        }
        updateJobs();
    });
}

allBtn.addEventListener("click", function () {
    interviewSection.hidden = true;
    rejectedSection.hidden = true;
    for (let i = 0; i < cards.length; i++) {
        cards[i].hidden = false;
    }
    allBtn.classList.remove("btn-soft");
    interviewBtn.classList.add("btn-soft");
    rejectedBtn.classList.add("btn-soft");

    updateJobs();
});
document.getElementById("interview-btn").addEventListener("click", function () {
    document.getElementById("interview-sec").hidden = false;
    document.getElementById("rejected-sec").hidden = true;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].inInterview) cards[i].hidden = false;
        else cards[i].hidden = true;
    }
    document.getElementById("all-btn").classList.add("btn-soft");
    document.getElementById("interview-btn").classList.remove("btn-soft");
    document.getElementById("rejected-btn").classList.add("btn-soft");

    updateJobs();
});
document.getElementById("rejected-btn").addEventListener("click", function () {
    document.getElementById("interview-sec").hidden = true;
    document.getElementById("rejected-sec").hidden = false;

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].inRejected) cards[i].hidden = false;
        else cards[i].hidden = true;
    }
    document.getElementById("all-btn").classList.add("btn-soft");
    document.getElementById("interview-btn").classList.add("btn-soft");
    document.getElementById("rejected-btn").classList.remove("btn-soft");

    updateJobs();
});

for (let i = 0; i < interBtn.length; i++) {
    interBtn[i].addEventListener("click", function () {
        let parentCard = interBtn[i].parentElement;

        if (!parentCard.inInterview) {
            parentCard.querySelector(".badge").classList.remove("bg-[#EEF4FF]", "bg-red-200", "text-red-800");
            parentCard.querySelector(".badge").classList.add("bg-green-200", "text-green-800");
            parentCard.querySelector(".badge").innerText = "Interview";
            parentCard.inInterview = true;
            interview++;
            if (parentCard.inRejected) {
                rejected--;
                parentCard.inRejected = false;
                if (!rejectedSection.hidden || !interviewSection.hidden) parentCard.hidden = true;
            }
            updateJobs();

            document.querySelector
        }
    });
}
for (let i = 0; i < rejecBtn.length; i++) {

    rejecBtn[i].addEventListener("click", function () {
        let parentCard = rejecBtn[i].parentElement;

        if (!parentCard.inRejected) {
            parentCard.querySelector(".badge").classList.remove("bg-[#EEF4FF]", "bg-green-200", "text-green-800");
            parentCard.querySelector(".badge").classList.add("bg-red-200", "text-red-800");
            parentCard.querySelector(".badge").innerText = "Rejected";
            parentCard.inRejected = true;
            rejected++;
            if (parentCard.inInterview) {
                interview--;
                parentCard.inInterview = false;
                if (!rejectedSection.hidden || !interviewSection.hidden) parentCard.hidden = true;
            }

            updateJobs();
        }

    });
}
