/**
 * The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object.
 * If you look at npm's package.json, you'll see that it has directories for doc, lib, and man.
 */
export default interface Directories {
    /** If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash. */
    bin?: string;
    /** Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday. */
    doc?: string;
    /** Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday. */
    example?: string;
    /** Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info. */
    lib?: string;
    /** A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder. */
    man?: string;
    /** ? */
    test?: string;
}
