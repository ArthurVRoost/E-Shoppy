// IMPORTS
import { useState } from "react";
import './argent.css'

// FUNCTION
export default function Argent({argent}) {
    return(
        <>
        <div className="divArgent">
            <h2 className="argentH2"> 
                {/* POUR 2 APRES VIRGULE */}
                Mon argent: €{argent.toFixed(2)}
            </h2>
        </div>
        </>
    )
}