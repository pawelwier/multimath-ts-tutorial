/// <reference path="player.ts" />

function startGame() {

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(600, playerName);
    postScore(-5, playerName);

}

function logPlayer(name: string = 'Default player') {
    console.log(`Game starts for: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'default'): void {

    let logger: (value: string) => void

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    if (score > 0) {
        logger = logMessage
    } else {
        logger = logError;
    }

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lainer';
console.log(firstPlayer.formatName())