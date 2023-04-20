import { PackageJson } from "./PackageJson";
import { JFReadOptions, JFWriteOptions, WriteCallback, readFile, readFileSync, writeFile, writeFileSync } from "jsonfile";

type CallbackType = (err: NodeJS.ErrnoException, data: PackageJson) => void;
const writeOptions: JFWriteOptions = { encoding: "utf-8", flag: "w", spaces: 2 };
const readOptions: JFReadOptions = { encoding: "utf-8" };
const defaultPackagePath: string = "./package.json";

/**
 * Service to save or load package.json config file
 */
export default class PackageManager {
    /**
     * @param appName The app name of the project.
     * @returns A default package.json template.
     */
    static new(appName: string) {
        return {
            name: appName,
            version: "1.0.0",
            description: "",
            main: "index.js",
            scripts: {
                test: 'echo "Error: no test specified" && exit 1',
            },
            keywords: [],
            author: "",
            license: "ISC",
        } as PackageJson;
    }

    /**
     * Writes the given model in a "package.json" file
     * @param packageJson The PackageJson model.
     * @param callback The operation callback.
     * @param path The saving path
     */
    static save = (packageJson: PackageJson, callback: WriteCallback, path: string = defaultPackagePath) =>
        writeFile(path, packageJson, writeOptions, callback);

    /**
     * Writes the given model in a "package.json" file
     * @param packageJson The PackageJson model.
     * @param path The saving path
     */
    static saveSync = (packageJson: PackageJson, path: string = defaultPackagePath) => writeFileSync(path, packageJson, writeOptions);

    /**
     * Loads a package.json config. If no path given, loads the current project(*'s config)
     * @param callback The operation callback.
     * @param path The saving path
     */
    static load = (callback: CallbackType, path: string = defaultPackagePath) => readFile(path, readOptions, (err, data) => callback(err, data));

    /**
     * Loads a package.json config. If no path given, loads the current project(*'s config)
     * @param path The saving path
     * @returns The config
     */
    static loadSync = (path: string = defaultPackagePath): PackageJson => readFileSync(path, readOptions);
}
