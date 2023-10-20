// import { MissionUtils } from "@woowacourse/mission-utils";

class Game {
    constructor() {
        this.userNumber = null;
        this.randomNumber = this.generateRandomNumber();
    }

    generateRandomNumber() {
        // 랜덤한 숫자 생성 로직
    }

    async inputUserNumber(questionText) {
        const userInput = await this.getUserInput(questionText);
        if (this.isValidateInputNumber(userInput)) {
            this.userNumber = this.stringToArray(userInput);
            const result = this.compareNumber(this.userNumber, this.randomNumber);

            if (result) {
                this.gameOption("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
            } else {
                this.inputUserNumber(questionText);
            }
        }
    }

    async getUserInput(questionText) {
        return new Promise((resolve, reject) => {
            MissionUtils.Console.readLine(questionText, (input) => resolve(input));
        });
    }

    isValidateInputNumber(input) {
        // 입력 유효성 검사 로직
        return true; // 유효한 경우 true 반환, 그렇지 않으면 false 반환
    }

    stringToArray(input) {
        // 문자열을 숫자 배열로 변환하는 로직
        return input.split("").map(Number);
    }

    compareNumber(userNumber, randomNumber) {
        // 숫자 비교 로직
        return true; // 일치하면 true 반환, 그렇지 않으면 false 반환
    }

    gameOption(questionText) {
        // 게임 옵션 로직
    }

    start() {
        this.inputUserNumber("숫자를 입력해주세요 : ");
    }
}

const game = new Game();
game.start();
