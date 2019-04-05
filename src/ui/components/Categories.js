import React from 'react'
import styled from 'styled-components'
import ApiIcon from '../../assets/icons/Api.svg'
import OpenSourceIcon from '../../assets/icons/OpenSource.svg'
import TechIcon from '../../assets/icons/Tech.svg'
import SecurityIcon from '../../assets/icons/Security.svg'
import DesignIcon from '../../assets/icons/Design.svg'

const Categories = props => {
  const { categories } = props

  const CategoryStyle = styled.div`
    display: inline-flex;
    width: 30%;
    margin: 45px 0;
    text-align: left;
  `

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

  const CategoriesStyle = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 105px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `

  const iconStyle = {
    margin: 0,
    width: 'auto',
    height: 'auto',
  }

  const categoryComponents = categories.map((category, index) => {
    const Icon = getIcon(category.type)
    return (
      <CategoryStyle key={index + category.type}>
        <div>
          <div>
            <Icon style={iconStyle} />
          </div>
          <CategoryTitle>{category.title}</CategoryTitle>
          <div>{category.description}</div>
        </div>
      </CategoryStyle>
    )
  })

  return <CategoriesStyle>{categoryComponents}</CategoriesStyle>
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
