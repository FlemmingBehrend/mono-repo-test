import { helloFromPkgB } from './index';
describe('pkg-b', () => {
  it('should work', () => {
    expect(helloFromPkgA()).toBe("Hello from pkg-b');
  });
});