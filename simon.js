let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore = 0;

let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let p = document.querySelector("p");

// part1
        document.addEventListener("click", function(){
            if(started == false){
                console.log("game started");
                started = true;
                p.innerText = "";
                levelUp(); 
            }
        });

// part2
        function gameFlash(btn) {
            btn.classList.add("gameflash");
            setTimeout(function() {
                btn.classList.remove("gameflash");
            }, 200);
        }

        function userFlash(btn) {
            btn.classList.add("userflash");
            setTimeout(function() {
                btn.classList.remove("userflash");
            }, 200);
        }

        function btnPress() {
            //console.log("btn was pressed");
            userFlash(this);
            let userColor = this.classList[1];
            userSeq.push(userColor);
            //console.log("userSeq",userSeq);
            checkAns(userSeq.length - 1);
        }

        let allbtn = document.querySelectorAll(".btn");
        for(btn of allbtn){ 
            btn.addEventListener("click", btnPress);
        }

        



function levelUp() {
    level ++;
    h3.innerText = `Level ${level}`;
    hghScre();

    let rndmIndx = Math.floor(Math.random()*3)
    gameFlash(allbtn[rndmIndx]);
    let gameColor = allbtn[rndmIndx].classList[1];
    gameSeq.push(gameColor);
    console.log("gameSeq",gameSeq);
    userSeq = [];
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length){
            setTimeout(levelUp, 300);
        }
    }else{
        h3.innerText = `Game Over! Your score was ${level}.`;
        p.innerText = "Click any where outside the button to restart";
        body.classList.add("redbody");
            setTimeout(function() {
                body.classList.remove("redbody");
            }, 100);
            setTimeout(reset, 110);
    }
}

function hghScre() {
    if(highScore < level){
        highScore = level;
        h4.innerText = `HIgh Score : ${highScore} `;
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}