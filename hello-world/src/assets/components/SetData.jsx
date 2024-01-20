import React from "react";
import { useState } from 'react'

const SetData = () => {
    const [numero, setNumber] = useState(1);
    
    function setDataMais () {
        setNumber(numero + 1);
    }
    function setDataMenos () {
        if (numero > 1) {setNumber(numero - 1);
        }
    }
    
    return (
        <>
        <button onClick={setDataMenos}>-</button>
        <input type="number" value={numero} onChange={(e) => setNumber(Math.floor(e.target.value))} />
        <button onClick={setDataMais}>+</button>
        </>
    )
}

export default SetData