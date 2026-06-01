interface CurrencyConfig {
  locale: Intl.LocalesArgument;
  currency: string;
  amount: number;
}

export const currencyFormatter = ({
  locale,
  currency,
  amount,
}: CurrencyConfig) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
