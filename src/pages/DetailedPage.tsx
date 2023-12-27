import React from 'react'
import styled from 'styled-components'
const DetailedPage = () => {
  return (
    <div>
      <Container>
        <Main></Main>
      </Container>
    </div>
  )
}

export default DetailedPage
const Main = styled.div`
    width: 900px;
    background-color: black;
`
const Container = styled.div`
    width: 100%;
`
