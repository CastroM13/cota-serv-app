import { QuotaValuePipe } from './quota-value.pipe';

describe('QuotaValuePipe', () => {
  it('create an instance', () => {
    const pipe = new QuotaValuePipe();
    expect(pipe).toBeTruthy();
  });
});
