import { filterTags, initializeSelectedTags } from "../tagUtil";

describe("TagFilter", () => {
  describe("filterTags", () => {
    it("should filter nodes by api tag", () => {
      const filterByTags = filterTags([{ name: "Api", selected: true }]);
      const nodes = [{ node: { frontmatter: { tags: ["Api", "tech"] } } }];
      const filtered = nodes.filter(filterByTags);
      expect(filtered).toHaveLength(1);
    });

    it("should not filter nodes by tag", () => {
      const filterByTags = filterTags([{ name: "tech" }]);
      const nodes = [
        { node: { frontmatter: { tags: ["test"] } } },
        { node: { frontmatter: { tags: ["tech"] } } },
      ];
      const filtered = nodes.filter(filterByTags);
      expect(filtered).toHaveLength(2);
    });

    it("should filter untagged nodes by tag", () => {
      const filterByTags = filterTags([
        { name: "tech", selected: true },
        { name: "api", selected: true },
      ]);
      const nodes = [
        { node: { frontmatter: { tags: ["tech"] } } },
        { node: { frontmatter: { tags: ["api"] } } },
        { node: { frontmatter: {} } },
      ];
      const filtered = nodes.filter(filterByTags);
      expect(filtered).toHaveLength(2);
    });
  });

  describe("initializeTags", () => {
    it("should initialize tags", () => {
      const tags = initializeSelectedTags([
        { fieldValue: "api" },
        { fieldValue: "tech" },
      ]);
      expect(tags).toHaveLength(2);
      expect(tags[0].selected).toBe(true);
    });

    it("should initialize tags when param has no hits", () => {
      const tags = initializeSelectedTags(
        [{ fieldValue: "api" }, { fieldValue: "tech" }],
        "design"
      );
      expect(tags).toHaveLength(2);
    });

    it("should initialize tags based on param", () => {
      const tags = initializeSelectedTags(
        [{ fieldValue: "api" }, { fieldValue: "tech" }],
        "tech"
      );
      expect(tags).toHaveLength(2);
      expect(tags[0].name).toBe("api");
      expect(tags[0].selected).toBe(false);
      expect(tags[1].selected).toBe(true);
    });
  });
});
