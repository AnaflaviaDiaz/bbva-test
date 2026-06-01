interface AmountConfig {
  locale: Intl.LocalesArgument;
  currency: string;
  amount: number;
}

export const amountFormatter = ({ locale, currency, amount }: AmountConfig) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
