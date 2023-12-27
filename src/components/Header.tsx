// import react from "react"
import styled from "styled-components"
import {AiOutlineMenu, AiOutlineSearch, AiOutlineVideoCameraAdd} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"
import {IoMdNotificationsOutline} from "react-icons/io"
import img from "../assets/download.png"
import img2 from "../assets/passport.jpg"

const Header = () =>{
  return(
    <div>
    <Container>
    <Wrap>
      <LogoArea>
      <Menu bc="">
      <AiOutlineMenu/>
      </Menu>
      <Logo src={img}/>
      </LogoArea>
      <Search>
        <SearchHold>
        <Input placeholder="Search"/>
        <Div>
        <AiOutlineSearch/>
        </Div>
        </SearchHold>
        <Menu bc="1">
      <BsFillMicFill/>
      </Menu>
      </Search>

      <Signup>
      <Menu bc="">
      <AiOutlineVideoCameraAdd/>
      </Menu>
      <Menu bc="">
      <IoMdNotificationsOutline/>
      </Menu>
      <Avatar src={img2}/>
      </Signup>
    </Wrap>
    </Container>
    </div>
  )
}
export default Header;
const Avatar = styled.img`
width: 55px;
height: 55px;
border-radius: 50%;
cursor: pointer;
margin: 0px 10px 0px 10px;

`
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: silver;
  height: 60px;
  cursor: pointer;
  width: 70px;

`
const Input = styled.input`
flex: 1;
height: 60px;
font-size: 20px;
font-family: poppins;
outline-width: 0;
/* margin: 0px 10px; */
`
const SearchHold = styled.div`
width: 600px;
height: 50px;
border: 1px solid grey;
border-radius: 30px;
/* background-color: green; */
display: flex;
  justify-content: center;
  font-size: 27px;
  align-items: center; 
  overflow: hidden;
  margin: 0px 10px;
`

const Logo = styled.img`
height: 60px;
margin: 0px 0px 0px 5px;
cursor: pointer;
`
const Menu = styled.div<{bc: string}>`
width: 55px;
height: 55px;
border-radius: 50%;
cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 27px;
  align-items: center; 
  background-color: ${({bc})=> (bc? "#dddddd" : "transparent")};
  transition: .3s ease;
&:hover{
background-color: #ededed;
}
`
const LogoArea = styled.div`
display: flex;
justify-content: center;
`
const Search = styled.div`
display: flex;
  justify-content: center;
  align-items: center; 
`
const Signup = styled.div`
display: flex;
`
const Wrap = styled.div`
  width: 95%;
  height: 100%;
  /* background-color: grey; */
  display: flex;
  justify-content: space-between;
  align-items: center;   
`
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white; 
  display: flex;
  justify-content: center;
  align-items: center; 
`