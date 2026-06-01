import { expect } from '@open-wc/testing';
import { amountFormatter } from './amount-formatter.js';

describe('amountFormatter', () => {
  it('should format EUR currency', () => {
    const result = amountFormatter({
      locale: 'es-ES',
      currency: 'EUR',
      amount: 7_885.23,
    });

    expect(result).to.equal('7885,23\u00A0€');
  });

  it('should format USD currency', () => {
    const result = amountFormatter({
      locale: 'en-US',
      currency: 'USD',
      amount: 7_885.23,
    });

    expect(result).to.equal('$7,885.23');
  });
});
