import { argIndex0, cmdHandler } from './parseArgs';

//test param
const exInput: string = "luhn-check args && tsc main.ts";

//single command only
let acceptedArgs: string[] = ["help", "cd", "tsc", "luhn-check", "github"];

argIndex0(exInput, acceptedArgs); //pass
argIndex0("cd1 args", acceptedArgs); //fail

//match exInput[0]
if (argIndex0(exInput, acceptedArgs) === true) {
    let index0: string = exInput.split(" ")[0];
    cmdHandler(index0);
} else {
    console.log("false")
}