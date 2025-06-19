let game = () => {
    let playerscore = 0;
    let computerscore = 0;
    let moves = 0;

    let playgame = () => {
        let rockbtn = document.querySelector(".A");
        let paperbtn = document.querySelector(".B");
        let scissorsbtn = document.querySelector(".C");
        let playeroptions = [rockbtn, paperbtn, scissorsbtn];
        let computeroptions = ['rock', 'paper', 'scissors'];

        playeroptions.forEach(element => {
            element.addEventListener("click", function () {
                let moveleft = document.querySelector(".left");
                moves++;
                moveleft.innerHTML = `Moves Left: ${10 - moves}`;

                let choicenumber = Math.floor(Math.random() * 3);
                let computerchoice = computeroptions[choicenumber];
                winner(element.innerText.toLowerCase(), computerchoice);

                if (moves == 10) {
                    gameover(playeroptions, moveleft);
                }
            });
        });
    };

    let winner = (player, computer) => {
        let result = document.querySelector('.result');
        let playerscoreboard = document.querySelector('.hot');
        let computerscoreboard = document.querySelector('.cool');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            result.innerHTML = 'Tie';
        } else if (player === 'rock') {
            if (computer === 'paper') {
                computerscore++;
                result.innerHTML = 'Computer Won';
                computerscoreboard.innerHTML = computerscore;
            } else {
                playerscore++;
                result.innerHTML = 'Player Won';
                playerscoreboard.innerHTML = playerscore;
            }
        } else if (player === 'paper') {
            if (computer === 'rock') {
                playerscore++;
                result.innerHTML = 'Player Won';
                playerscoreboard.innerHTML = playerscore;
            } else {
                computerscore++;
                result.innerHTML = 'Computer Won';
                computerscoreboard.innerHTML = computerscore;
            }
        } else if (player === 'scissors') {
            if (computer === 'rock') {
                computerscore++;
                result.innerHTML = 'Computer Won';
                computerscoreboard.innerHTML = computerscore;
            } else {
                playerscore++;
                result.innerHTML = 'Player Won';
                playerscoreboard.innerHTML = playerscore;
            }
        }
    };

    let gameover = (playeroptions, moveleft) => {
        let choosemove = document.querySelector('.move');
        let result = document.querySelector('.result');
        let restartbtn = document.querySelector('.restart');

        playeroptions.forEach(element => {
            element.style.display = 'none';
        });

        choosemove.innerHTML = 'Game Over';
        moveleft.style.display = 'none';

        if (playerscore > computerscore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game';
            result.style.color = '#308D46';
        } else if (playerscore < computerscore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        } else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey';
        }
        restartbtn.innerText = 'Restart';
        restartbtn.style.display = 'flex';
        restartbtn.addEventListener('click', () => {
            window.location.reload();
        });
    };

    playgame();
};
game();
