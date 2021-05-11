import styled from "styled-components";

export const ContainerRed = styled.div`
width:100%;
background-color: #f57952;
clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
padding: 10rem 0;
color: white;

`;


export const PhoneImg = styled.img`
height: 40rem;
flex: 1;
@media (max-width: 900px) {
  flex: 100%;
  height: 30rem;

}

`;

export const Description = styled.div`
flex: 1;
margin: 3rem;
@media (max-width: 900px) {
  flex: 100%;
  text-align: center;

}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  @media (max-width: 400px) {
    font-size: 2rem;
  }
}
p {
  font-size: 1.2rem;
  line-height: 2.5rem;
  font-weight:600;
}
p + p {
  margin-top: 1rem;
}
`;

export const ContainerWhite = styled.div`
background-color: white;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap-reverse;
padding: 10rem 0;
color:#3D3D3D;
`;