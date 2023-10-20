import { MissionUtils } from "@woowacourse/mission-utils";

// const Message = {
//     Start: "숫자 야구 게임을 시작합니다.",
//     Input: "숫자를 입력해주세요 : ",
//     InputError_1: "[ERROR] 숫자 3개를 입력해주세요",
//     InputError_2: "[ERROR] 숫자를 입력해주세요",
//     InputError_3: "[ERROR] 중복되지 않은 숫자 3개를 입력해주세요",
//     InputError_4: "[ERROR] 잘못된 입력 형식입니다.",
//     Success: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
// };

// const getUserNumber = () => {
//     const userNumber = MissionUtils.Console.readLine(Message.Input, (asnwer) => {
//         return asnwer;
//     });
//     try {
//         if (userNumber < 100 || userNumber > 999) throw new Error(Message.InputError_1);
//         else if (isNaN(userNumber) == true) throw new Error(Message);
//         else if (userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[2] == userNumber[0]) throw new Error(Message.InputError_3);
//         else return userNumber;
//     } catch (error) {
//         MissionUtils.Console.print(InputError_4);
//         return getUserNumber();
//     }
// };

// const NumberBaseball = () => {
//     MissionUtils.Console.print(Message.Start);
//     const userNumbers = getUserNumber();
//     MissionUtils.Console.print("입력 숫자 : ", userNumbers);
//     // const userNumber = getUserNumber();
//     // MissionUtils.Console.print(userNumber);

//     const computer_list = [];
//     while (computer_list.length < 3) {
//         const number = MissionUtils.Random.pickNumberInRange(1, 9);
//         if (!computer_list.includes(number)) {
//             computer_list.push(number);
//         }
//     }

//     // console.log(computer_list);
// };

export default NumberBaseball;
