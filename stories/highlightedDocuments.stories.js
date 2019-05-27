import React from 'react'
import { storiesOf } from '@storybook/react'
import { HighlightedDocuments } from '../src/pages/docs/_HighlightedDocuments'
import { LayoutDecorator } from './index.stories'

const items = [
  { node: { frontmatter: { title: "Api" }, fields: {} } },
  { node: { frontmatter: { title: "Tech" }, fields: {} } },
  { node: { frontmatter: { title: "Open source kdløj" }, fields: {} } },
  { node: { frontmatter: { title: "Design" }, fields: {} } },
  { node: { frontmatter: { title: "dont show this" }, fields: {} } },
];

storiesOf("HighlightedDocuments", module)
  .addDecorator(LayoutDecorator)
  .add("default", () => (
      <div style={{ marginTop: 200, border: "1px solid"}}>
        <HighlightedDocuments items={items} />
      </div>
  ));