import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'


import { Link } from 'gatsby'
import GlobalStyle from 'components/common/GlobalStyle'
import Footer from 'components/common/Footer'
import Introduction from 'components/main/Introduction'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <Footer />
    </Container>
  )
}

export default IndexPage
