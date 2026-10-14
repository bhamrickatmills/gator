import { CommandsRegistry, registerCommand, handlerLogin } from "./Commands.js"
import { setUser, readConfig } from "./config.js"
import process from 'process';

const commands: CommandsRegistry = {}

function main() {
    registerCommand(commands, "login", handlerLogin)
    if (process.argv[2] == "login" && process.argv.length < 4) {
        console.log("User name required")
        process.exit(1);
    }
    if (process.argv.length <= 3) {
        console.log("Not enough arguments provided")
        process.exit(1);
    }

    setUser(process.argv[3])
    process.exit(0);
}

main();
