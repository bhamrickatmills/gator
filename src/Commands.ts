import { setUser } from "./config";

export type CommandHandler = (cmdName: string, ...args: string[]) => void;

export type CommandsRegistry = Record<string, CommandHandler>

export function registerCommand(registry: CommandsRegistry, cmdName: string, handler: CommandHandler) {
    registry[cmdName] = handler
}

export function runCommand(registry: CommandsRegistry, cmdName: string, ...args: string[]) {
    registry[cmdName](cmdName, ...args)
}

export function handlerLogin(cmdName: string, ...args: string[]) {
    if (args.length <= 0) {
        throw Error("the login handler expects a single arguments, the username.");
    }
    let name = args[0]

    setUser(name)
    console.log("user name set: " + name)
}