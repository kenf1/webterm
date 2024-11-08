import React, { useState, useEffect } from "react";
import { argIndex0, cmdHandler } from "../../Logic/parseArgs";
import "../../Static/gif.css";

export function DefRoute() {
    let [userInput, setUserInput] = useState("");
    let [displayText, setDisplayText] = useState("");
    let [allCmd, setAllCmd] = useState<string[][]>([]);

    // get user input & store as var
    const defFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputVal: string = event.target.value;
        setUserInput(inputVal);
    };

    // parse user input into commands and arguments
    useEffect(() => {
        if (userInput) {
            let commands = userInput.split("&&").map(command => command.trim().split(" "));
            setAllCmd(commands);
        }
    }, [userInput]);

    // handle Enter button
    const handleEnter = () => {
        let acceptedCmd: string[] = [
            "about", "github",
            "help", "clear", "echo",
            "luhn-check", "rot13-encode", "rot13-decode",
            "hacker", "sudo", "sudoo", "sudooo"
        ];

        // check if cmd index 0 is from list of accepted commands
        if (argIndex0(userInput, acceptedCmd) === true) {
            while (allCmd.length > 0) {
                let cmdAction: string = cmdHandler(allCmd[0][0], allCmd[0][1]);
                setDisplayText(prevText => prevText + cmdAction + '\n'); // append to existing output

                // clear all output + input box
                if (allCmd[0][0] === "clear") {
                    setDisplayText(""); //output
                    setUserInput(""); //input box
                }

                // pop from front
                allCmd.splice(0, 1);
            }
        } else {
            setDisplayText("Invalid command entered. Type `help` to get list of available commands.");
        }
    };

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
                {["hacker", "sudooo"].includes(userInput.split(" ")[0]) ? (
                    <div className="gif-container">
                        $user: <img src={displayText} />
                    </div>
                ) : (
                    <div style={{ whiteSpace: "pre-wrap" }}>
                        $user: {displayText}
                    </div>
                )}
            </div>
        </>
    );
}