import { VariantHeading } from './variant.model.js';

export interface AmountModel {
  amount: number;
  currency: string;
  locale?: string;
  heading: VariantHeading;
}
