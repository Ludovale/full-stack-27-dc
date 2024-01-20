import React from "react";
import { useState } from 'react'

const Lista =  () => {  

    const [meses] = useState(["jan", "fev", "mar", "abr", "mai", "jul", "jun", "set", "out", "nov", "dez"]);

    function linha() {
        return (
                meses.map((item, i) => (
                <option key={i}>{item}</option>
            ))

        )

    }
    return (
        <div>
            <select name="" id="selecionar">
                {linha()}
                </select>
        </div>
    )
            }

export default Lista