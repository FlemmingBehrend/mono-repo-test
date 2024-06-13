import { helloFromPkgC } from "./index";
describe("pkg-c", () => {
  it("should work", () => {
    expect(helloFromPkgC()).toBe("Hello from pkg-c");
  });
});
