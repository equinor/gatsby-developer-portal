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

  describe("InitializeTags", () => {
    describe("initialize tags", () => {
      let tags;

      beforeAll(() => {
        tags = initializeSelectedTags([
          { fieldValue: "api" },
          { fieldValue: "tech" },
        ]);
      });

      it("should have 2 tags", () => {
        expect(tags).toHaveLength(2);
      });

      it("should not have selected tags", () => {
        tags.forEach(tag => {
          expect(tag.selected).toBe(false);
        });
      });
    });

    it("should initialize tags when param has no hits", () => {
      const tags = initializeSelectedTags(
        [{ fieldValue: "api" }, { fieldValue: "tech" }],
        "design"
      );
      expect(tags).toHaveLength(2);
    });

    describe("Initialize tags based on param", () => {
      let tags, apiTag, techTag;

      beforeAll(() => {
        tags = initializeSelectedTags(
          [{ fieldValue: "api" }, { fieldValue: "tech" }],
          "tech"
        );
        apiTag = tags[0];
        techTag = tags[1];
      });

      it("should have 2 tags", () => {
        expect(tags).toHaveLength(2);
      });

      it("should have tag api", () => {
        expect(apiTag.name).toBe("api");
      });

      it("should have api tag selected", () => {
        expect(apiTag.selected).toBe(false);
      });

      it("should have tech tag selected", () => {
        expect(techTag.selected).toBe(true);
      });
    });
  });
});
