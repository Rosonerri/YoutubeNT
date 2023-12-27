// import react from "react"
import styled from "styled-components"
import {getSearchVideo } from "../api/API"
const NavProp = () =>{
    return(
        <div>
        <Container>
        <Navs bc="" c="1"
        onClick={()=>{
          getSearchVideo("All")
        }}
        >All</Navs>
        <Navs bc="1" c=""
        onClick={()=>{
          getSearchVideo("Sport")
        }}
        >Sport</Navs>
        <Navs bc="1" c=""
        onClick={()=>{
          getSearchVideo("Fashion")
        }}
        >Fashion</Navs>
        <Navs bc="1" c=""
        onClick={()=>{
          getSearchVideo("Cartoon")
        }}
        >Cartoon</Navs>
        <Navs bc="1" c=""
        onClick={()=>{
          getSearchVideo("War")
        }}
        >War</Navs>
         <Navs bc="1" c=""
        onClick={()=>{
          getSearchVideo("Football")
        }}
        >Football</Navs>
         <Navs bc="1" c=""
        onClick={()=>{
          getSearchVideo("Seria A")
        }}
        >Seria A </Navs>
        </Container>
        </div>
    )
}
export default NavProp;
const Navs = styled.div<{bc: string, c: string}>`
background-color: ${({bc}) =>(bc? "#dddddd" : "black")};
color: ${({c}) =>(c? "white" : "black")};
padding: 5px 10px;
border-radius: 5px;
display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  align-items: center; 
  margin: 20px 10px 30px;
  cursor: pointer;
`
const Container = styled.div`
display: flex;
`