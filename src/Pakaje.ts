import { PackageJson } from "./PackageJson";
import { JFReadOptions, JFWriteOptions, WriteCallback, readFile, readFileSync, writeFile, writeFileSync } from "jsonfile";

type CallbackType = (err: NodeJS.ErrnoException, data: PackageJson) => void;
const writeOptions: JFWriteOptions = { encoding: "utf-8", flag: "w", spaces: 2 };
const readOptions: JFReadOptions = { encoding: "utf-8" };
const defaultPackagePath: string = "./package.json";

/**
 * Service to save or load package.json config file
 */
export class Pakaje {
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
     * @param config The PackageJson model.
     * @param path The saving path
     */
    static save = async (config: PackageJson, path: string = defaultPackagePath) => writeFile(path, config, writeOptions);

    /**
     * Writes the given model in a "package.json" file
     * @param config The PackageJson model.
     * @param path The saving path
     */
    static saveSync = (config: PackageJson, path: string = defaultPackagePath) => writeFileSync(path, config, writeOptions);

    /**
     * Loads a package.json config. If no path given, loads the current project(*'s config)
     * @param path The saving path
     * @returns A promise containing the loaded config
     */
    static load = async (path: string = defaultPackagePath) => {
        const promise = readFile(path, readOptions);
        return new Promise<PackageJson>((resolve, reject) => {
            promise.then((data) => resolve(data as PackageJson));
            promise.catch(reject);
        });
    };

    /**
     * Loads a package.json config. If no path given, loads the current project(*'s config)
     * @param path The saving path
     * @returns The loaded config
     */
    static loadSync = (path: string = defaultPackagePath) => readFileSync(path, readOptions) as PackageJson;
}
