import react,{useEffect, useState} from "react"
import styled from "styled-components"
import NavProp from "../pages/NavProp"
// import img from "../assets/passport.jpg"
// import img2 from "../assets/iphone6.jpg"
// import vid from "../assets/Learn SOLID Principles with CLEAN CODE Examples (1).mp4"
import moment from "moment";
import { Link } from "react-router-dom";






const HomeScreen = () =>{

  const [state, setState] = useState<any>({})

  useEffect(()=>{
    setState(JSON.parse(localStorage.getItem("Youtube")!))
  }, [])
  return(
    <div>
      {/* <Link to="/detailedPage" style={{textDecoration: "none"}}> */}
      <Container>
    <Div>
    <NavProp/>
    </Div>
    <Main>
    {state?.items && state?.items.map((props: any)=>(
      
      <Card>
      <Top>
      <Pix src={props.snippet.thumbnails.high.url}/>
      <Video src={`https://youtube.com/embed/${props?.id.videoId}`} />
      {/* muted loop autoPlay */}
      </Top>
      <Bottom>
        <Avatar src={props.snippet.thumbnails.high.url}/>
        <Right>
          <Title>{props.snippet.channelTitle}</Title>
          <Desc>{props.snippet.description}</Desc>
          <Time>3k View &middot; {moment(new Date().getTime()).fromNow()}</Time>
        </Right>
      </Bottom>
    </Card>
    ))}
    </Main>
</Container>
      {/* </Link> */}
    </div>
  )
}
export default HomeScreen;
const Pix = styled.img`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
opacity: 1;
`
const Video = styled.iframe`
position: absolute;
width: 100%;
height: 100%;
top: 0px;
left: 0px;
opacity: 0;
transition: all 350ms;
object-fit: cover;
`
const Title = styled.h4``
const Desc = styled.div``
const Time = styled.div``
const Right = styled.div`
margin-left: 15px;
`
const Avatar = styled.img`
width: 55px;
height: 55px;
border-radius: 50%;
cursor: pointer;
margin: 5px 0px;
`
const Top = styled.div`
width: 100%;
border-radius: 7px;
cursor: pointer;
background-color: black;
height: 70%;
overflow: hidden;
transition: .3s ease;
display: flex;
position: relative;
justify-content: center;
align-items: center;
&:hover{
cursor: pointer;
  ${Video}{
    opacity: 1;
  }
}
`
const Bottom = styled.div`
display: flex;

`
const Card = styled.div`
width: 500px;
margin-top: 100px;
cursor: pointer;
height: 350px;
/* background-color: #dddddd; */
margin: 0px 15px 35px;
`

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Div = styled.div`
  width: 100%;
  /* background-color: orange; */
 
`
const Container = styled.div`
    width: 100%;
    /* background-color: green; */
`