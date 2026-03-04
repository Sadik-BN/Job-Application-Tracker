let totalJob = 8;
let interview = 0;
let rejected = 0;

let allSection = document.getElementById("all-sec");
let interviewSection = document.getElementById("interview-sec");
let rejectedSection = document.getElementById("rejected-sec");
let emptySection = document.getElementById("empty");

let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectedBtn = document.getElementById("rejected-btn");

function updateJobs() {
    let dashCard = document.querySelectorAll(".dash-card h3");
    dashCard[0].innerText = `${totalJob}`;
    dashCard[1].innerText = `${interview}`;
    dashCard[2].innerText = `${rejected}`;

    if (allSection.hidden === false) {
        document.getElementById("page-job-count-all").innerText = `${totalJob} Jobs`;
        if (totalJob == 0) {
            emptySection.hidden = false;
        }
        else {
            emptySection.hidden = true;
        }
    }
    if (interviewSection.hidden === false) {
        document.getElementById("page-job-count-all").innerText = `${interview} of ${totalJob} Jobs`;
        if (interview == 0) {
            emptySection.hidden = false;
        }
        else {
            emptySection.hidden = true;
        }
    }
    if (rejectedSection.hidden === false) {
        document.getElementById("page-job-count-all").innerText = `${rejected} of ${totalJob} Jobs`;
        if (rejected == 0) {
            emptySection.hidden = false;
        }
        else {
            emptySection.hidden = true;
        }
    }
}
updateJobs();
let cards = document.querySelectorAll(".jcard");
for (let i = 0; i < cards.length; i++) {
    cards[i].inInterview = false;
    cards[i].inRejected = false;
}


let interBtn = document.querySelectorAll(".btn-success");
let rejecBtn = document.querySelectorAll(".btn-error");