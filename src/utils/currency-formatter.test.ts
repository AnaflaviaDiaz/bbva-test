import { expect } from '@open-wc/testing';
import { currencyFormatter } from './currency-formatter.js';

describe('currencyFormatter', () => {
  it('should format EUR currency', () => {
    const result = currencyFormatter({
      locale: 'es-ES',
      currency: 'EUR',
      amount: 7_885.23,
    });

    expect(result).to.equal('7885,23\u00A0€');
  });

  it('should format USD currency', () => {
    const result = currencyFormatter({
      locale: 'en-US',
      currency: 'USD',
      amount: 7_885.23,
    });

    expect(result).to.equal('$7,885.23');
  });
});
