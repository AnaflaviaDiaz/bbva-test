interface AmountConfig {
  amount: number;
  currency: string;
  locale?: Intl.LocalesArgument;
}

/**
 * Formatea el monto con moneda utlizando la configuración regional enviadas.
 * @param config - configuración para formatear el monto
 * @param config.locale - localización para formatear el monto, ej: 'es-ES' | 'en-US' | etc. Si no se envía, se utiliza 'de-DE' por defecto.
 * @param config.currency - moneda para formatear el monto, por ejemplo 'EUR' | 'USD' | etc.
 * @param config.amount - monto a formatear
 * @returns { string } monto formateado con moneda
 * @example
 * amountFormatter({
      locale: 'de-DE',
      currency: 'EUR',
      amount: 7_885.23,
    }); => '7.885,23 €'
 */
export const amountFormatter = ({
  locale = 'de-DE',
  currency,
  amount,
}: AmountConfig): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
