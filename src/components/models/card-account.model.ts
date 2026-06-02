import { AmountModel } from './amount.model.js';

export interface CardAccountModel {
  // header
  date: string;
  
  amount?: AmountModel;

  // footer actions
  hasActionButtons?: boolean;

  primaryButtonText?: string;
  handlePrimaryButton?: () => void;

  secondaryButtonText?: string;
  handleSecondaryButton?: () => void;
}
