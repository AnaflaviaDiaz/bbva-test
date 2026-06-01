import { expect } from '@open-wc/testing';
import { dateFormatter } from './date-formatter.js';

describe('dateFormatter', () => {
  it('should format date when month is lower than 10', () => {
    const result = dateFormatter(new Date('1997-09-25'));

    expect(result).to.equal('25-09-1997');
  });

  it('should format date when day is lower than 10', () => {
    const result = dateFormatter(new Date('2026-06-05'));

    expect(result).to.equal('05-06-2026');
  });
});
