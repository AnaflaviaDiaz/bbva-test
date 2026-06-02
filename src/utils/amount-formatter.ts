interface AmountConfig {
  amount: number;
  currency: string;
  locale?: Intl.LocalesArgument;
}

export const amountFormatter = ({ locale = 'de-DE', currency, amount }: AmountConfig) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
