import React from 'react'
import styled from 'styled-components'
import DocumentIcon from '../../assets/icons/Document.svg'

const HighlightedDocumentItem = props => {
  const { title, marginLeft } = props

  const HighlightedDocumentStyle = styled.div`
    display: inline-flex;
    width: 100%;
    margin-left: ${marginLeft}px;
    justify-content: center;
    padding-top: 20px;
    background-color: #ffffff;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1),
      0 20px 20px 0 rgba(0, 0, 0, 0.05);
  `
  return (
    <HighlightedDocumentStyle>
      <div>
        <div>
          <DocumentIcon />
        </div>
        <div style={{ margin: '10px 0' }}>{title}</div>
      </div>
    </HighlightedDocumentStyle>
  )
}

export { HighlightedDocumentItem }
