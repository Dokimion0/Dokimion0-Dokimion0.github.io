import styled from '@emotion/styled'
import Layout from '../components/layout'
import Seo from '../components/seo'
import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

const TestPage: FunctionComponent = () => {
  
  const CategoryItem = styled(({ active, ...props }) => (
    <Link {...props} />
  ))`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    font-weight: ${({ active }) => (active ? '800' : '400')};
    cursor: pointer;
  
    &:last-of-type {
      margin-right: 0;
    }
`

    console.log(CategoryItem)

  return (
    <>
        <CategoryItem active={true}>
          #All 
        </CategoryItem>
        <CategoryItem active={false}>
          #All 
        </CategoryItem>
        <CategoryItem active={false}>
          #All 
        </CategoryItem>
      <h1>test</h1>
      <p>test</p>
    </>
  )
}

export default TestPage
