let totalJob= 8;
let interview=0;
let rejected=0;

function updateJobs(){
    let dashCard = document.querySelectorAll(".dash-card h3");
    dashCard[0].innerText = `${totalJob}`;
    dashCard[1].innerText = `${interview}`;
    dashCard[2].innerText = `${rejected}`;
}

