const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    .slice(0,160);

export const nodes = [
  {
    node: {
      excerpt: dummyText,
      fields: { slug: "/api/" },
      frontmatter: { title: "Api", tags: ["API"], featuredDocument: true },
    },
  },
  {
    node: {
      excerpt: dummyText,
      fields: { slug: "/design/" },
      frontmatter: {
        title: "Design",
        tags: ["Design"],
        featuredDocument: null,
      },
    },
  },
  {
    node: {
      excerpt: dummyText,
      fields: { slug: "/security/" },
      frontmatter: {
        title: "Security",
        tags: ["Security"],
        featuredDocument: null,
      },
    },
  },
  {
    node: {
      excerpt: dummyText,
      fields: { slug: "/security/" },
      frontmatter: { title: "Tech", tags: ["tech"], featuredDocument: null },
    },
  },
  {
    node: {
      excerpt: dummyText,
      fields: { slug: "/open-source/" },
      frontmatter: {
        title: "Open Source",
        tags: ["open-source"],
        featuredDocument: null,
      },
    },
  },
];
