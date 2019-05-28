import { storiesOf } from '@storybook/react'
import React from 'react'
import DocListing from '../src/components/DocListing'
import { DocHeader } from '../src/components/DocHeader'
import { LayoutDecorator } from './index.stories'
import { docNodes } from './mock/mockData'

storiesOf('Doc', module)
  .addDecorator(LayoutDecorator)
  .add('DocListing', () => (
    <DocListing node={docNodes[0].node}></DocListing>
  ))
  .add('DocHeader api', () => (
    <DocHeader tags={['api']} title="Api"/>
  ))
  .add('DocHeader tech', () =>
    <DocHeader tags={['tech']} title="Technology"/>,
  )



