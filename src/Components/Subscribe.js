import style from "styled-components";

export const Button = style.button`
align-items: center;
justify-content: center;
margin-left: 40%;
margin-top: 200px;
width: 200px;
height: 50px;
color: white;
font-size: 20px;
border:none;
border-radius:10px;
width: ${(props) => (props.large ? "500px" : "200px")};
height:70px;
background-color:${(props) =>props.color };
&:hover{
  cursor:pointer;
  background-color:${(props) =>props.darkColor};
}

`;
