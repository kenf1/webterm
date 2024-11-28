import React, { useState } from "react";
import { intRegex, inputX2, sumNumArray } from "../../Logic/algorithms.ts";
import "../../Static/ldebug.css";

export function LuhnDebug() {
    const [testInput, setTestInput] = useState("");
    const [testStr, setTestStr] = useState("");
    const [testResArr, setTestResArr] = useState<number[]>([]);
    const [singleSum, setSingleSum] = useState<number>(0);
    const [resultMessage, setResultMessage] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    let handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //get user input
        let value: string = event.target.value;
        setTestInput(value);

        //rm all spaces + non-numbers
        let processedValue: string = intRegex(value);
        setTestStr(processedValue);

        //double every other digit (exclude last digit in rev-mode)
        //sum digits of doubled number if >= 10
        let processedArray: number[] = inputX2(processedValue);
        setTestResArr(processedArray);

        //sum all digits
        let sum: number = sumNumArray(processedArray);
        if (isNaN(sum)) {
            setSingleSum(-1);
        } else {
            setSingleSum(sum);
        }

        //calculate
        let remainder: number = sum % 10;
        if (remainder === 0) {
            setResultMessage("PASS");
        } else {
            setResultMessage("FAIL");
        }
    };

    //dark mode on/off
    let handleModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className={`ldebug ${isDarkMode ? "dark-mode" : ""}`}>
                <div className="ldebug-container">
                    <input
                        type="text"
                        value={testInput}
                        onChange={handleInputChange}
                        placeholder="Input number to check"
                    />

                    <div>
                        <p className="ldebug-result-font">
                            <b>Result:</b> <span className={resultMessage === "PASS" ? "pass" : "fail"}>{resultMessage}</span>
                        </p>
                    </div>

                    <div>
                        <p className="ldebug-debug-font">
                            <b>Processed String:</b>
                            <br /><br />
                            <center>
                                {testStr}
                            </center>
                        </p>
                    </div>

                    <div>
                        <p className="ldebug-debug-font">
                            <b>Processed Array:</b>
                            <br /><br />
                            <center>
                                {testResArr.join(", ")}
                            </center>
                        </p>
                    </div>

                    <div>
                        <p className="ldebug-debug-font">
                            <b>Sum of Array:</b>
                            <br /><br />
                            <center>
                                {singleSum === -1 ? "-" : singleSum}
                            </center>
                        </p>
                    </div>

                    <div className="ldebug-mode-button">
                        <button onClick={handleModeToggle} className="dark-mode-toggle">
                            {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}