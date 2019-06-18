import { isLocationActive } from "../Navigation";

describe("Navigation", () => {
  describe("Active link", () => {
    it("should be active when user navigates to home", () => {
      expect(isLocationActive("/", "/")).toEqual(true);
      expect(isLocationActive("/docs/some-blog-post", "/")).toEqual(true);
      expect(isLocationActive("/docs-theme/api", "/")).toEqual(true);
    });

    it("should not be active when user navigates to home", () => {
      expect(isLocationActive("/", "/blog")).toEqual(false);
    });

    it("should be active when user navigates to blog", () => {
      expect(isLocationActive("/blog", "/blog")).toEqual(true);
      expect(isLocationActive("/blog/some-blog-post", "/blog")).toEqual(true);
    });

    it("should not be active when user navigates to blog", () => {
      expect(isLocationActive("/", "/blog")).toEqual(false);
      expect(isLocationActive("/search", "/blog")).toEqual(false);
    });
  });
});
