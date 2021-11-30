import React, { useState, useEffect } from "react"
import styled from "styled-components";
import flowers from "../imgs/startss.png"

const Sidebar = ({ scores, setScores, setTr, setString }) => {
    const [seconds, setSeconds] = useState(0);
    let scritta = ""
    

    const starter = () => {
            setScores(0)
            setSeconds(30)
            setTr(true)
    }

    if (seconds > 0) {
     setTimeout(() => setSeconds(seconds - 1), 1000);
    }

    if (seconds === 0 && scores > 0){
        setTr(false)
        if(scores > 200){
            setString("Partita finita, complimenti, sei molto forte, ma nella vita non ti serve a nulla")
        } if (scores >= 10 && scores < 200){
            setString("Partita finita, sei scars* come lo schifo, ma evidentemente hai impiegato il tempo a fare qualcosa di costruttivo")
        }
    } 

    if (seconds === 0 && scores === 0){
        setTr(false)
        setString("regolamento")
    }

    return (

        <WrapperSideBar>
            <Title>punti: {scores}</Title>
            <Title>counter: {seconds}</Title>
            <Start onClick={() => starter()}>Inizio</Start>           
            <Scritta>{scritta}</Scritta>
        </WrapperSideBar>
    )

}
export default Sidebar;

const WrapperSideBar = styled.div`
width: 20%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
height: 60%
`

const Start = styled.button`
font-size: 20px;
padding: 5px 20px;
border:none;
background-color: #ffc0cbd5;
color: purple;
font-family: 'Dancing Script', cursive;
:hover{
    background-color: pink;
}
`

const Title = styled.h1`
color: pink;
font-family: 'Dancing Script', cursive;
font-weight: bold;

`

const Scritta = styled.h1`
color: pink;
font-family: 'Dancing Script', cursive;
`


