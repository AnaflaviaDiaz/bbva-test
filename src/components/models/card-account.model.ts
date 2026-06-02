import { AmountModel } from './amount.model.js';

export interface CardAccountModel {
  date: string;
  amount?: AmountModel;
}
