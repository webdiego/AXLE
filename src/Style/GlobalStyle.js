import "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-size:62,5%;
  font-family: 'Quicksand', sans-serif;
}

/* COLORS 
light-red:#F57952
red:#E95223
grey:  linear-gradient(#F6F6F6,#C7C7C7)
black:#3D3D3D
*/
` 

export default GlobalStyle;