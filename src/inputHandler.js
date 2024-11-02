import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { Validator } from './validate.js';

export class Input {
   static async getPurchaseAmount() {
      const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
      Validator.validatePurchaseAmount(Number(amount));
      return Number(amount);
   }

   static async getWinningNumbers() {
      const winningNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      Validator.validateLottoNumbers(winningNumbers);
      return winningNumbers;
   }

   static async getBonusNumber() {
      const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      Validator.validateBonusNumber(Number(bonusNumber));
      return bonusNumber;
   }
}
