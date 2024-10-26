import React, { useState } from "react"
import "./App.css"

function App() {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //get user input & store as var
    const inputVal: string = event.target.value;
    setUserInput(inputVal);
  }

  return (
    <>
      <div className="input-box">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Enter value:"
        />
      </div>

      <div>
        <p className="res-desc">
          You entered:
        </p>

        <br />

        <p className="res-actual">
          {userInput}
        </p>
      </div>
    </>
  )
}

export default App
