import React from 'react'
import { storiesOf } from '@storybook/react'
import { mockAuthors } from './mock/mockData'
import BlogListing from '../src/components/BlogListing'
import { BlogPostHeader } from '../src/templates/blog/BlogPostHeader'
import { LayoutDecorator } from './index.stories'

export const blogNode = {
  excerpt: 'The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...',
  frontmatter: { title: 'A blogpost', tags: ['Api'], date: '2019-05-04' },
  fields: { slug: '', collection: '', authors: mockAuthors },
}

storiesOf('Blog', module)
  .addDecorator(LayoutDecorator)
  .add('BlogListing', () => (
    <BlogListing node={blogNode}></BlogListing>
  ))
  .add('BlogPostHeader', () => (
    <BlogPostHeader title="Api" date="2019-05-04" tags={['api']} authors={mockAuthors}/>
  ))
