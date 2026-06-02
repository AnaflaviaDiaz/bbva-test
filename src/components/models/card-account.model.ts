import { TemplateResult } from 'lit';

import { AmountModel } from './amount.model.js';
import { BadgeModel } from './badge.model.js';
import { CategoryModel } from './category.model.js';

export interface CardAccountModel {
  date: string;
  title: string;
  badgeStatus: BadgeModel;
  accountCategory: CategoryModel;
  cardCategory: CategoryModel;
  amount?: AmountModel;
  descriptionTemplate?: TemplateResult;
  hasActionButtons?: boolean;
  primaryButtonText?: string;
  handlePrimaryButton?: () => void;
  secondaryButtonText?: string;
  handleSecondaryButton?: () => void;
}
