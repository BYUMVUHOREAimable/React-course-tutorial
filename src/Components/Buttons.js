import style from "styled-components";

const colorRed = " red";
const colorBlue = " blue";
const colorGreen = "green";


export const ButtonRed = style.button`
width: 200px;
height: 30px;
margin-top:5px;
background-color:${colorRed};
align-items: center;
justify-content: center;
margin-left: 40%;
`;

export const ButtonBlue = style.button`
margin-top:5px;
width: 200px;
height: 30px;
background-color:${colorBlue};
align-items: center;
justify-content: center;
margin-left: 40%;
`;

export const ButtonGreen = style.button`
width: 200px;
height: 30px;
background-color:${colorGreen};
align-items: center;
justify-content: center;
margin-top:5px;
margin-left: 40%;
`;