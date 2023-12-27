// import react from "react"
import styled from "styled-components"
import {AiFillHome} from "react-icons/ai"
import {MdOutlineVideoLibrary, MdSubscriptions, MdOutlineScreenshotMonitor } from "react-icons/md"

interface iProp{
    icon: any;
    text: string
}

const Nav: React.FC<iProp> = ({icon, text}) =>{
    return(
        <Holder bc="">
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
        </Holder>
    )
}
const Sider = ()=>{
    return(
        <div>
        <Container>
            <Nav icon={<AiFillHome/>} text="Home"/>
            <Nav icon={<MdOutlineScreenshotMonitor />} text="Shorts"/>
            <Nav icon={<MdSubscriptions />} text="Subscriptions"/>
            <Nav icon={<MdOutlineVideoLibrary />} text="Library"/>
        </Container>
        </div>
    )
}
export default Sider;
const Icon = styled.div`
font-size: 35px;
`
const Text = styled.div`
font-size: 14px;
font-weight: 200;

`
const Holder = styled.div<{bc: string}>`
cursor:pointer;
width: 80px;
height: 80px;
margin: 30px 0px 0px 30px;
background-color: ${({bc}) =>(bc? "#dddddd" : "transparent")};
border-radius: 5px;
display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center; 
  transition: .3s ease;
  &:hover{
background-color: #dddddd;
  }
`
const Container = styled.div`
    margin: 95px 0px;
   width: 100px;
   height: calc (100vh - 100px);
   /* background-color: crimson; */
   position: fixed;
   display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center; 
`