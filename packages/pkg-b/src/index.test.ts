import { helloFromPkgB } from './index';
describe('pkg-b', () => {
  it('should work', () => {
    expect(helloFromPkgB()).toBe('Hello from pkg-b')
  });
});