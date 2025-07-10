import { useState } from "react";
export default function LudoBox() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 })

    let updateBlue = () => {

        console.log(`moves.blue ${moves.blue}`);
        setMoves((prevMoves)=>{
         return { ...prevMoves, blue: prevMoves.blue + 1 }
        }); // whenever you update the object use to  do sperate 

    }

    let updateyellow = () => {

        console.log(`moves.yellow ${moves.yellow}`);
        setMoves((prevMoves)=>{
         return { ...prevMoves, yellow: prevMoves.yellow + 2 }
        }); // whenever you update the object use to  do sperate 

    }

    let updategreen = () => {

        console.log(`moves.green ${moves.green}`);
        setMoves((prevMoves)=>{
         return { ...prevMoves, green: prevMoves.green + 1 }
        }); // whenever you update the object use to  do sperate 

    }
    let updatered = () => {

        console.log(`moves.red ${moves.red}`);
        setMoves((prevMoves)=>{
         return { ...prevMoves, red: prevMoves.red + 1 }
        }); // whenever you update the object use to  do sperate 

    }

    return (
        <div>
            <p>Game Beging !</p>

            <div className="board">
                <p>Blue move = {moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

                <p>yellow move{moves.yellow} = </p>
                <button style={{ backgroundColor: "yellow" }}onClick={updateyellow} >+2</button>

                <p>Green move = {moves.green}</p>
                <button style={{ backgroundColor: " green" }}onClick={updategreen}>+1</button>

                <p>Red move = {moves.red}</p>
                <button style={{ backgroundColor: "red" }}onClick={updatered}>+1</button>
            </div>
        </div>

    );
}

