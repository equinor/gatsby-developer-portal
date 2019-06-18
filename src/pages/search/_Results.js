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

  //set fuzzy distance 1 for short terms, and 2 for longer terms.
  const fuzzyDistance = query.length > 3 ? 2 : 1;
  const searchQuery = `${query.trim()}~${fuzzyDistance}`;
  const results = lunrIndex.index.search(searchQuery);
  const sortScore = (a, b) => b.score - a.score;
  return results.sort(sortScore).map(({ ref }) => lunrIndex.store[ref]);
}
