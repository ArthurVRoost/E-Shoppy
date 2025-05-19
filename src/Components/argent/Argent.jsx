import { useState } from "react";
import './argent.css'
export default function Argent({argent}) {
    return(
        <>
        <div className="divArgent">
            <h2 className="argentH2"> 
                Mon argent: €{argent.toFixed(2)}
            </h2>
        </div>
        </>
    )
}