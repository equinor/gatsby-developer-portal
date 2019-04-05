import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'


const SearchInputStyle = styled.input`
    font-weight: 500;
    width: 100%;
    outline: none;
    font-size: 48px;
    letter-spacing: -0.1px;
    line-height: 52px;
    padding: 30px 0;
    text-align: center;
    background-color: rgba(255,18,67,0.1);
    border: 0;
`;

const SearchInput = ({value, onChange}) => {
  return (
    <form>
      <SearchInputStyle
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
}

const Results = (props) => {
  const {query} = props;
  const results = getSearchResults(query, 'en');
  return (
    <div>
      {results.map((page) => {
        //@todo use page.collection to customize result.
        return <div key={page.title}>{page.title} - <span style={{fontWeight: 'bold'}}>{page.collection}</span></div>
      })}
    </div>
  );
};

export default (props) => {
  const { data, location } = props
  const { title, subTitle, menuLinks } = data.site.siteMetadata
  const [query, setQuery] = useState('*');
  
  return (
    <Layout
      location={location}
      title={title}
      subTitle={subTitle}
      menuLinks={menuLinks}
    >
      <div style={{marginTop: 30, marginBottom: 150}}>
        <SearchInput value={query} onChange={setQuery} />
        <Results query={query}>query</Results>
      </div>
    </Layout>
  );
}

function getSearchResults(query, lng) {
  if (!query || !window.__LUNR__) return []
  const lunrIndex = window.__LUNR__[lng]
  
  const searchQuery = `${query.trim()}~1`;
  const results = lunrIndex.index.search(searchQuery);
  
  return results
  // .filter(result => {
  //   console.log(result);
  //   return result.score > 0.1;
  // })
    .map(({ ref }) => lunrIndex.store[ref])
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subTitle
        menuLinks {
          name
          link
          url
        }
      }
    }
  }
`;