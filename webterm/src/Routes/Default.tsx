import React, { useState } from "react"
import { argIndex0, cmdHandler } from "../../Logic/parseArgs"

export function DefRoute() {
    let [userInput, setUserInput] = useState("");
    let [displayText, setDisplayText] = useState("");

    //get user input & store as var
    const defFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputVal: string = event.target.value;
        setUserInput(inputVal);
    }

    //enter button
    const handleEnter = () => {
        let acceptedCmd: string[] = [
            "about", "github",
            "help", "echo", "luhn-check", "hacker",
            "sudo", "sudoo", "sudooo"
        ];

        //check if cmd index 0 is from list of accepted commands
        if (argIndex0(userInput, acceptedCmd) === true) {
            //get cmd + args
            let fullCmd: string[] = userInput.split(" ");

            let cmd_action: string = cmdHandler(fullCmd[0], fullCmd[1]);
            setDisplayText(cmd_action);
        } else {
            setDisplayText("Invalid command entered. Type `help` to get list of available commands.");
        }
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
                <button onClick={handleEnter}>Enter</button>
            </div>

            <div className="res-actual">
                $user: {displayText}
            </div>
        </>
    )
}