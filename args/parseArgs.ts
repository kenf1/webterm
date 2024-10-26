//confirm index 0 is accepted command
export function argIndex0(input: string, refArray: string[]): boolean {
    let inputArr: string[] = input.split(" ");

    if (inputArr.length > 0) {
        if (refArray.includes(inputArr[0])) {
            console.log("SUCCESS");
            return true;
        } else {
            console.log(inputArr[0] + " is not an accepted argument");
            return false;
        }
    } else {
        console.log("No argument provided");
        return false;
    }
}

//run options
export function cmdHandler(inputCmd: string) {
    switch (inputCmd) {
        case "help":
            console.log("Available commands:\n");
            break;
        case "sudo":
            console.log("Incorrect command. Did you mean `sudooo`?");
            break;
        case "luhn-check":
            console.log("Enter string:");
            break;
        case "hacker":
            console.log("I've broken into the mainframe.")
            break;
        case "sudoo":
            console.log("So close... Missing a `o`");
            break;
        case "sudooo":
            console.log("...");
            break;
        default:
            console.log("Command not available");
            break;
    }
}