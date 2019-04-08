import React from 'react'
import styled from 'styled-components'
import ApiIcon from '../../assets/icons/Api.svg'
import OpenSourceIcon from '../../assets/icons/OpenSource.svg'
import TechIcon from '../../assets/icons/Tech.svg'
import SecurityIcon from '../../assets/icons/Security.svg'
import DesignIcon from '../../assets/icons/Design.svg'
import {Col, Row} from 'react-styled-flexboxgrid';

const Categories = props => {
  const { categories } = props

  const CategoryTitle = styled.div`
    width: 44px;
    color: #333333;
    font-family: Equinor;
    font-size: 30px;
    letter-spacing: -0.08px;
    line-height: 36px;
    margin-top: 5px;
    margin-bottom: 15px;
  `


  const iconStyle = {
    margin: 0,
    width: 'auto',
    height: 'auto',
  }

  const categoryComponents = categories.map((category, index) => {
    const Icon = getIcon(category.type)
    return (
      <Col md={4} sm={6} xs={12} key={index+category.type} style={{marginTop: 50}}>
            <Icon style={iconStyle} />
            <CategoryTitle>{category.title}</CategoryTitle>
            <div>{category.description}</div>
      </Col>
    )
  })

  return <Row>{categoryComponents}</Row>
}

export { Categories }

function getIcon(categoryType) {
  switch (categoryType) {
    case 'api':
      return ApiIcon
    case 'open source':
      return OpenSourceIcon
    case 'tech':
      return TechIcon
    case 'security':
      return SecurityIcon
    case 'design':
      return DesignIcon
    default:
      throw `icon type ${categoryType} is not supported. `
  }
}
