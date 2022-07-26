let counterHTML = document.getElementById("counterId");
console.log(counterHTML);
let totalCount = 0;
function increaseCount(){
    totalCount += 1
    counterHTML.textContent = totalCount;
}

function decreaseCount() {
    totalCount -= 1
    counterHTML.textContent = totalCount;
}

function resetCount () {
    totalCount = 0;
    counterHTML.textContent = totalCount;
}