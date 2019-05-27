import React from "react";

import { DocListing } from "../../components";
import { BlogListingDivider } from "../../components/BlogListing";

export const Results = ({ query, posts }) => {
  const results = getSearchResults(query, "en");
  return (
    <div>
      {results.map(page => {
        const nodes = posts.filter(
          p => p.node.frontmatter.title === page.title
        );
        if (!nodes) {
          return;
        }
        return nodes.map(({ node }) => {
          switch (node.fields.collection) {
            case "blog":
              return <BlogListingDivider key={node.fields.slug} node={node} />;
            case "docs":
              return <DocListing key={node.fields.slug} node={node} />;
            default:
              return null;
          }
        });
      })}
    </div>
  );
};

function getSearchResults(query, lng) {
  if (typeof window === "undefined" || !window.__LUNR__) {
    return [];
  }
  const lunrIndex = window.__LUNR__[lng];

  if (!query) {
    query = "**";
  }

  const searchQuery = `${query.trim()}~1`;
  const results = lunrIndex.index.search(searchQuery);
  return (
    results
      // .filter(result => {
      //   console.log(result);
      //   return result.score > 0.1;
      // })
      .map(({ ref }) => lunrIndex.store[ref])
  );
}
