import React, { useState } from "react"
import "./App.css"
import { prepFunc, sumNumArray, inputX2 } from "../../luhn-algo/func.ts"

function App() {
  const [userInput, setUserInput] = useState("");
  const [singleSum, setSingleSum] = useState<number>(0);
  const [resultMessage, setResultMessage] = useState("");

  const luhnAlgo = (event: React.ChangeEvent<HTMLInputElement>) => {
    //get user input & store as var
    const inputVal: string = event.target.value;
    setUserInput(inputVal);

    /*
      rm all spaces + non-numbers
      double every other digit (exclude last digit in rev-mode)
      sum digits of doubled number if >= 10
    */
    const processedArray: number[] = inputX2(
      prepFunc(inputVal)
    );

    //sum all digits
    const sum: number = sumNumArray(processedArray);
    if (isNaN(sum)) {
      setSingleSum(-1);
    } else {
      setSingleSum(sum);
    }

    //outcome
    const remainder: number = sum % 10;
    if (remainder === 0) {
      setResultMessage('PASS');
    } else {
      setResultMessage('FAIL');
    }
  }

  return (
    <>
      <div>
        <p className="res-desc">
          Output:
        </p>

        <p className="res-actual">
          The input returned a total sum of {singleSum === -1 ? '-' : singleSum}
        </p>

        <p className="res-actual">
          <span className={resultMessage === 'PASS' ? 'pass' : 'fail'}>{resultMessage}</span>
        </p>

      </div>

      <div className="input-box">
        {/* <p className="term-user">
          user:
        </p> */}
        <input
          type="text"
          value={userInput}
          onChange={luhnAlgo}
          placeholder="$"
        />
      </div>
    </>
  )
}

export default App
