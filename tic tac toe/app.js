let boxes = document.querySelectorAll('.box');
let over = document.querySelector('.overlay');
let outflag = document.querySelectorAll('.outflag');
let count = 0;
let xWin = 0,oWin = 0;
let player1 = prompt('enter name of Player 1');
let player2 = prompt('enter name of Player 2');

outflag[0].innerHTML = `${player1}(X) <br> ${xWin}`;
outflag[1].innerHTML = `${player2}(O) <br> ${oWin}`;

function mark(elem) {
    if (elem.innerText == "") {
        if (count % 2 == 0) {
            elem.innerText = "X"
            count++
        } else {
            elem.innerText = "O"
            count++
        }
    }
    console.log(count);
    if(
        boxes[0].innerText == "X" && boxes[1].innerText == "X" && boxes[2].innerText == "X" ||
        boxes[3].innerText == "X" && boxes[4].innerText == "X" && boxes[5].innerText == "X" ||
        boxes[6].innerText == "X" && boxes[7].innerText == "X" && boxes[8].innerText == "X" ||
        boxes[0].innerText == "X" && boxes[3].innerText == "X" && boxes[6].innerText == "X" ||
        boxes[1].innerText == "X" && boxes[4].innerText == "X" && boxes[7].innerText == "X" ||
        boxes[2].innerText == "X" && boxes[5].innerText == "X" && boxes[8].innerText == "X" ||
        boxes[0].innerText == "X" && boxes[4].innerText == "X" && boxes[8].innerText == "X" ||
        boxes[2].innerText == "X" && boxes[4].innerText == "X" && boxes[6].innerText == "X" 
    ){
            over.innerText = "X wins";
            over.style.top = "0";
            xWin++
            outflag[0].innerHTML = `${player1}(X) <br> ${xWin}`;
    }
    else if(
        boxes[0].innerText == "O" && boxes[1].innerText == "O" && boxes[2].innerText == "O" ||
        boxes[3].innerText == "O" && boxes[4].innerText == "O" && boxes[5].innerText == "O" ||
        boxes[6].innerText == "O" && boxes[7].innerText == "O" && boxes[8].innerText == "O" ||
        boxes[0].innerText == "O" && boxes[3].innerText == "O" && boxes[6].innerText == "O" ||
        boxes[1].innerText == "O" && boxes[4].innerText == "O" && boxes[7].innerText == "O" ||
        boxes[2].innerText == "O" && boxes[5].innerText == "O" && boxes[8].innerText == "O" ||
        boxes[0].innerText == "O" && boxes[4].innerText == "O" && boxes[8].innerText == "O" ||
        boxes[2].innerText == "O" && boxes[4].innerText == "O" && boxes[6].innerText == "O" 
    ){
            over.innerText = "O wins";
            over.style.top = "0";
            oWin++
            outflag[1].innerHTML = `${player2}(O) <br> ${oWin}`;

    }else if(count==9){
        over.innerText = "Draw";
        over.style.top = "0";
    }
}
over.addEventListener(
    "click",
    () => {
        for(let i=0;i<boxes.length;i++){
            boxes[i].innerText = ""
        }
        over.style.top = ""
        count = 0
    }

)

