/*
  Dice Rolling Game.
  Check my Website for more work
  https://www.availablecoder.xyz/

  email: ahmed.cross10@gmail.com
*/
window.onload = function () {
    // your code 
    const dice = document.querySelector(".dice"); // dice ibject
    const cube = document.querySelector(".cube"); // dice body
    const btn = document.querySelector(".role"); // button of rolling
    const rollVal = document.querySelector(".input"); // input of prediected number
    const iVal = document.querySelector(".plus"); // button of increasing value in input
    const dVal = document.querySelector(".minus"); // button of decreasing value in input
    const choice = document.querySelector(".result .choose"); // the message of details about the choice and result
    const message = document.querySelector(".result .message"); // message of prediction
    const choiceText = document.querySelector("#choosen-number");
    // variable used
    let animationCount = 12;
    function selectedIcon(choice) {
        {
            if (choice === 1) return 'soleil';
            if (choice === 2) return 'bulle';
            if (choice === 3) return 'tools';
            if (choice === 4) return 'ampoule';
            if (choice === 5) return 'araigne';
            if (choice === 6) return 'arbre';
        }
    }

    // increasing value of input field on clicking
    iVal.onclick = function () {
        if (rollVal.value < parseInt(rollVal.getAttribute("max")))
            rollVal.value++;
        choiceText.innerHTML = selectedIcon(parseInt(rollVal.value))
    }
    dVal.onclick = function () {
        if (rollVal.value > parseInt(rollVal.getAttribute("min")))
            rollVal.value--;
        choiceText.innerHTML = selectedIcon(parseInt(rollVal.value))

    }
    rollVal.onblur = function () {
        if (this.value > 6) {
            this.value = 6;
        }
        if (this.value < 1) {
            this.value = 1;
        }
    }

    // Events Will occuars when pressing roll
    document.onkeyup = function (e) {
        if (e.key === "Enter") btn.click();
        if (e.key === "ArrowUp") iVal.click();
        if (e.key === "ArrowDown") dVal.click();
    }
    btn.addEventListener('click', function () {
        gameStart();
    });


    function gamePreparation() {
        rollVal.setAttribute("disabled", "disabled");
        btn.setAttribute("disabled", "disabled");
        iVal.setAttribute("disabled", "disabled");
        dVal.setAttribute("disabled", "disabled");
        choice.innerHTML = "";
        message.innerHTML = "";
    }
    function gameStart() {

        gamePreparation();

        // making random numbers in rotational directions
        let randDegX = Math.trunc(Math.random() * 4 + 1);
        let randDegY = Math.trunc(Math.random() * 4 + 1);
        let randDegZ = Math.trunc(Math.random() * 4 + 1);
        cube.style = `transform: rotateX(${animationCount * 90 + randDegX * 90}deg) rotateY(${animationCount * 90 + randDegY * 90}deg) rotateZ(${animationCount * 90 + randDegZ * 90}deg);`;

        // All Values predicted to get
        let rollingValues = [
            [
                [3, 6, 4, 5],
                [3, 6, 4, 5],
                [3, 6, 4, 5],
                [3, 6, 4, 5]
            ],
            [
                [6, 4, 5, 3],
                [1, 1, 1, 1],
                [5, 3, 6, 4],
                [2, 2, 2, 2]
            ],
            [
                [4, 5, 3, 6],
                [4, 5, 3, 6],
                [4, 5, 3, 6],
                [4, 5, 3, 6]
            ],
            [
                [5, 3, 6, 4],
                [2, 2, 2, 2],
                [6, 4, 5, 3],
                [1, 1, 1, 1]
            ],
        ];

        // Getting the real value
        let degX = ((randDegX * 90) / 90) - 1;
        let degY = ((randDegY * 90) / 90) - 1;
        let degZ = ((randDegZ * 90) / 90) - 1;
        let rollingResult = rollingValues[degX][degY][degZ];
        console.log(rollingResult);


        // Events after finition rolling animation
        setTimeout(() => {
            console.log(rollVal.value)
            document.querySelector(".result .choose").innerHTML = `Tu as choisis: ${selectedIcon(parseInt(rollVal.value))} -- Mais le dé a choisi: ${selectedIcon(rollingResult)}`;
            if (rollingResult === +rollVal.value) {
                document.querySelector(".result .message").innerHTML = `Incroyable! vous aviez vu juste! 😎`;
            } else {
                document.querySelector(".result .message").innerHTML = `Mince! plue de chance une prochaine fois! 😥`;
            }
            rollVal.removeAttribute("disabled");
            btn.removeAttribute("disabled");
            iVal.removeAttribute("disabled");
            dVal.removeAttribute("disabled");
        }, 2000);

        // increment the rolling for the next press
        animationCount += 12;

    }


};
