
import styled from "styled-components";
//img
import SliceCode from '../img/SliceCode Normal.png'

const Footer= ()=> {
  return (
    <FooterStyle>
      <h3>Created by</h3>
      <img src={SliceCode} alt="" />
    </FooterStyle>
  )
}

export default Footer

const FooterStyle= styled.div`
width:100%;
height:7rem;
background-color:#f57952;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
color:white;
font-size:.8rem;
img{
  height:2rem;
}
`