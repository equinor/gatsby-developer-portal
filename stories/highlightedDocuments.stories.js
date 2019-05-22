import { storiesOf } from '@storybook/react'
import { HighlightedDocuments } from '../src/pages/docs/_HighlightedDocuments'
import React from 'react'
import Layout from '../src/components/layout/Layout';

const items = [
  { node: { frontmatter: { title: "Api" }, fields: {} } },
  { node: { frontmatter: { title: "Tech" }, fields: {} } },
  { node: { frontmatter: { title: "Open source kdløj" }, fields: {} } },
  { node: { frontmatter: { title: "Design" }, fields: {} } },
  { node: { frontmatter: { title: "dont show this" }, fields: {} } },
];

storiesOf("HighlightedDocuments", module).add("default", () => {
  //need layout here to not break the design, and get the fonts.
  // add margin and border for demo purpose.
  //@todo HighlightedDocuments should not depend on Layout to be displayed correctly.
  return (
    <Layout>
      <div style={{ marginTop: 200, border: "1px solid"}}>
        <HighlightedDocuments items={items} />
      </div>
    </Layout>
  );
});