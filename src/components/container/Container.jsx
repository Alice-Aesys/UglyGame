import React, { useState } from "react";
import styled from 'styled-components';
import Sidebar from "../sideBar";
import prato from "../../imgs/prato.png"
import margherita from "../../imgs/margherita.png"
import ape from "../../imgs/ape.png"
import lombrico from "../../imgs/lombrico.png"
import lumaca from "../../imgs/lumaca.png"
import farfalla from "../../imgs/farfalla.png"

const ButtonStyled = () => {
    const [score, setScore] = useState(0)
    const [click, setClick] = useState(0)
    const [icon, setIcon] = useState(margherita)
    const [trig, setTrig] = useState(false)
    const [strin, setStrin] = useState("")
    const animals = ["ape", "lombrico", "lumaca", "farfalla"]
    let mg1 = (Math.round(Math.random() * 40))
    let mg2 = (Math.round(Math.random() * 90)) + 1
    let marg = `${mg1}% 0 0 ${mg2}%`
    let casual = animals[(Math.round(Math.random() * 4))]


    const functionTriggerClick = () => {

        if (click > 5) {
            setClick(0)
        } else {
            setClick(click + 1)
        }

        if (click === (Math.round(Math.random() * 5))) {
            switch (casual) {
                case casual = "ape":
                    setIcon(ape);
                    setScore(score + 20)
                    break;
                case casual = "lombrico":
                    setIcon(lombrico);
                    setScore(score - 10)
                    break;
                case casual = "lumaca":
                    setIcon(lumaca)
                    setScore(score - 5)
                    break;
                case casual = "farfalla":
                    setIcon(farfalla)
                    setScore(score + 50)
                    break;
            }
        } else {
            setIcon(margherita)
            setScore(score + 10)
        }
    }

    console.log(icon)
    return (
        <Wrapper prato={prato}>

            <LeftPart>

                <WrapperTitle2>
                    <Title2>Fiori e dolori: l'app più brutta di tutto l'internet</Title2>
                </WrapperTitle2>
                {trig ?
                    <WrapperButton>
                        <Images src={icon} mrgn={marg} onClick={() => functionTriggerClick()}></Images>
                    </WrapperButton> :
                    <WrapperTitle>
                        <Title>{strin}</Title>
                    </WrapperTitle>
                }
            </LeftPart>
            <Sidebar scores={score} setScores={setScore} setTr={setTrig} setString={setStrin} />
        </Wrapper>
    )



};

export default ButtonStyled;


const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
background-image: url(${(props) => props.prato});
background-size: cover;
`

const LeftPart = styled.div`
width: 80%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column
`

const Title2 = styled.h1`
color: pink;
font-family: 'Dancing Script', cursive;
font-size: 50px
`
const WrapperTitle2 = styled.div`
width: 100%;
display: flex;
justify-content: center
`
const WrapperButton = styled.div`
width: 100%;
height: 100%;
`

const Images = styled.img`
width:50px;
 height:50px;
 margin: ${props => props.mrgn};
`

/* 
const Button = styled.button`
width: 50px;
height: 50px;
background: ${props => props.randomCol};
margin: ${props => props.mrgn}
` */

const Title = styled.h1`
color: pink;
font-family: 'Dancing Script', cursive;
font-weight: bold;
text-align: center;
`

const WrapperTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
