import { helloFromPkgA } from './index';
describe('pkg-a', () => {
  it('should work', () => {
    expect(helloFromPkgA()).toBe("Hello from pkg-a package 10");
  });
});