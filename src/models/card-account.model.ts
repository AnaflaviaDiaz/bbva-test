import { TemplateResult } from 'lit';

import { AmountModel } from './amount.model.js';
import { BadgeModel } from './badge.model.js';
import { CategoryModel } from './category.model.js';

export interface MarketGain {
  direction: 'up' | 'down';
  color?: string;
}

export interface CardAccountModel {
  id: string;
  date: string;
  titleCard: string;
  badgeStatus: BadgeModel;
  accountCategory: CategoryModel;
  cardCategory: CategoryModel;
  marketGain?: MarketGain;
  amount?: AmountModel;
  imageTemplate?: TemplateResult;
  descriptionTemplate?: TemplateResult;
  primaryButtonText?: string;
  handlePrimaryButton?: () => void;
  secondaryButtonText?: string;
  handleSecondaryButton?: () => void;
}
