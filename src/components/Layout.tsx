// import react from "react"
import styled from "styled-components"
import {Outlet} from "react-router-dom"
import Header from "./Header"
import Sider from "./Sider"

const Layout = () =>{
  return(
    <div>
    <Container>
    <Header/>
    <Main>
      <Sider/>
      <Holder>
        <Div>
        <Outlet/>
        </Div>
      </Holder>
    </Main>
</Container>
    </div>
  )
}
export default Layout;
const Div = styled.div`
 width: calc(100% - 200px);
 /* background-color: grey;  */
`
const Holder = styled.div`
width: calc(100%);
justify-content: end;
/* background-color: yellow; */
display: flex;
`
const Main = styled.div`
width: 100%;
  /* background-color: pink;   */
  display: flex;  
`

const Container = styled.div`
  width: 100%;
  /* background-color: crimson;   */
`