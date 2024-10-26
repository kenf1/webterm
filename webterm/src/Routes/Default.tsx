import React, { useState } from "react"

export function DefRoute() {
    let [userInput, setUserInput] = useState("");

    const defFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
        //get user input & store as var
        let inputVal: string = event.target.value;
        setUserInput(inputVal);
    }

    return (
        <>
            <div className="input-box">
                <input
                    type="text"
                    value={userInput}
                    onChange={defFunc}
                    placeholder="$"
                />
            </div>
        </>
    )
}