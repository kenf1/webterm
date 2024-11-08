import { inputX2, prepFunc, sumNumArray, rot13 } from "./algorithms";

//confirm index 0 is accepted command
export function argIndex0(input: string, refArray: string[]): boolean {
    let inputArr: string[] = input.split(" ");

    if (inputArr.length > 0) {
        if (refArray.includes(inputArr[0])) {
            // console.log("SUCCESS");
            return true;
        } else {
            // console.log(inputArr[0] + " is not an accepted argument");
            return false;
        }
    } else {
        // console.log("No argument provided");
        return false;
    }
}

//run options
export function cmdHandler(inputCmd: string, arg: any | null): string {
    switch (inputCmd) {
        case "help":
            return `Available commands:
            - about: About this web app
            - github: Opens new tab to my GitHub profile (github.com/kenf1)
            - clear: Clear output
            - echo: Print entered arg
            - luhn-check: Run Luhn checker on input
            - rot13-encode: Encode string using ROT13 algorithm
            - rot13-decode: Decode string using ROT13 algorithm
            - hacker: Attempt to access mainframe (must be standalone command + run clear after)
            - sudo: Access as admin (must be standalone command + run clear after)`;
        case "about":
            // window.open("https://github.com/kenf1", "_blank");
            return "A terminal clone built with TypeScript + React by kenf1"
        case "github":
            window.open("https://github.com/kenf1/webterm", "_blank");
            return "Opening new tab to GitHub";
        case "echo":
            return arg ? arg : "Missing argument for `echo` command";
        case "luhn-check":
            if (arg === null) {
                return "Missing argument for `luhn-check` command";
            }

            //extract digits only
            let tidyInput: string = prepFunc(arg);

            //create array of digits
            let processedArray: number[] = inputX2(tidyInput);

            //sum all digits
            let numSum: number = sumNumArray(processedArray);

            //get result
            if (numSum % 10 === 0) {
                return "Input: " + tidyInput + " -> PASS";
            } else {
                return "Input: " + tidyInput + " -> FAIL";
            }
        case "rot13-encode":
            return arg ? rot13("encode", arg) : "Missing argument for `rot13-encode`";
        case "rot13-decode":
            return arg ? rot13("decode", arg) : "Missing argument for `rot13-decode`";
        case "hacker":
            // return "Firewall bypassed. I've broken into the mainframe!!!"
            return "https://wallpapercave.com/wp/wp3162625.gif";
        case "sudo":
            return "Incorrect command. Did you mean `sudoo`?";
        case "sudoo":
            return "So close! Missing another `o`?";
        case "sudooo":
            // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
            // return "Opening new tab...";
            return "https://media.giphy.com/media/5kq0GCjHA8Rwc/giphy.gif";
        default:
            return "Command not available";
    }
}