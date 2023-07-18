
function changeBGToBlack() {
    const root = document.querySelector(':root');
    root.style.setProperty('--mainColor', 'black');
    root.style.setProperty('--alternativeColor', 'white');
}

function changeBGToWhite() {

    const root = document.querySelector(':root');
    root.style.setProperty('--mainColor', 'white');
    root.style.setProperty('--alternativeColor', 'black');
}





for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        const span = document.createElement("span");
        span.innerHTML = i * j;
        const message = i + " * " + j + " = " + i * j;
        span.setAttribute("mytitle", message);

        if (j == 0) {
            span.innerHTML = i + j;
            span.style.backgroundColor = 'green';
            span.onclick = function () {

                selectedRow = i;

                showResult();
            };
        }
        if (i == 0) {
            span.innerHTML = i + j;
            span.style.backgroundColor = 'green';
            span.onclick = function () {

                selectedColumn = j;

                showResult();
            };
        }
        if (i == 0 && j == 0) {
            span.innerHTML = "✖️";
            span.style.backgroundColor = "black";
            span.style.color = "black";
        }
        document.body.appendChild(span);
    }
    document.body.appendChild(document.createElement("br"));
}

let selectedRow;
let selectedColumn;

function showResult() {
    restCode();
    if (selectedRow && selectedColumn) {

        const result = selectedRow * selectedColumn;
        const selectedCell = document.querySelector(
            `span[mytitle="${selectedRow} * ${selectedColumn} = ${result}"]`
        );
        console.log(result);

        selectedCell.classList.add("resultNumber");

        selectedRow = null;
        selectedColumn = null;

    }

}
function restCode() {
    const selectedNumber = document.querySelector(".resultNumber");
    const restColor = document.querySelector("span");
    if (selectedNumber != null && restColor != null) {
        selectedNumber.classList.remove("resultNumber");
        restColor.parentNode.removeChild("span");
    }
}








