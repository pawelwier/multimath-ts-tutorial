/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
     private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {
    }

    displayGme(): void {
        let gameForm: string = '';
        for (let i = 1; i<= this.problemCount; i++) {
            gameForm += '<div class="form-group">'
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">'
            gameForm += String(this.factor) + ' x ' + i + ' = </label>'
            gameForm += '<div class="form-group"><input style="width:120px" type="text" class="form-control" id="answer' + i + '" /></div>';
            gameForm += '</div>'
        }
        const gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {
        let score: number = 0;

        for (let i = 1; i <= this.problemCount; i++) {
            const answer: number = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }

        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        }

        this.scoreboard.addResults(result);
        this.scoreboard.updateScoreboard();

        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}