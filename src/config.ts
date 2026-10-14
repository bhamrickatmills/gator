import fs from "fs";
import os from "os";
import path from "path";

export interface Config {
    dbUrl: string,
    currentUserName: string
}

export function setUser(userName: string) {
    let config = readConfig()
    let updateConfig = {dbUrl: config.dbUrl, currentUserName: userName}
    writeConfig(updateConfig)
}

function getConfigFilePath(): string {
    let homePath = os.homedir()
    let pathString = path.join(homePath, "/.gatorconfig.json")
    return pathString
}

export function readConfig(): Config {
    let filePath = getConfigFilePath()
    let configFile = fs.readFileSync(filePath, {encoding: "utf-8"})
    let configFileRaw = JSON.parse(configFile)
    let config = validateConfig(configFileRaw)
    return config
}

function writeConfig(cfg: Config): void {
    let filePath = getConfigFilePath()
    try {
        fs.writeFileSync(filePath, JSON.stringify({db_url: cfg.dbUrl, current_user_name: cfg.currentUserName}))
    } catch(error) {
        console.log("Failed to write to config file")
    }
}

function validateConfig(rawConfig: any): Config {
    return {
        dbUrl: rawConfig.db_url,
        currentUserName: rawConfig.current_user_name ?? "",
    };
}