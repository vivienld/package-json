/**
 * A package.json representation.
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json
 */
interface PackageJson {
    /**
     * The package name.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name
     */
    name: string;
    /**
     * The package version.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version
     */
    version: string;
    /**
     * Put a description in it. This helps people discover your package, as it's listed in `npm search`.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#description-1
     * */
    description: string;
    /**
     * Put keywords in it. This helps people discover your package as it's listed in `npm search`.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#keywords
     */
    keywords?: string[];
    /**
     * The url to the project homepage.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#homepage
     */
    homepage?: string;
    /**
     * The url to your project's issue tracker and / or the email address to which issues should be reported.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs
     */
    bugs?: Bug;
    /**
     * You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license
     */
    license: string;
    /**
     * The author of the project.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
     */
    author: Person | string;
    /**
     * The contributors of the project.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
     */
    contributors?: Person[];
    /**
     * Up-to-date information about ways to help fund development of your package.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#funding
     */
    funding?: string | Funding | Funding[];
    /**
     * The optional files field is an array of file patterns that describes the entries to be included
     * when your package is installed as a dependency.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files
     */
    files?: string[];
    /**
     * The main field is a module ID that is the primary entry point to your program.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#main
     */
    main?: string;
    /**
     * If your module is meant to be used client-side the browser field should be used instead of the main field.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#browser
     */
    browser?: string;
    /**
     * A lot of packages have one or more executable files that they'd like to install into the PATH. npm makes this pretty easy
     * (in fact, it uses this feature to install the "npm" executable.)
     *
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
     */
    bin?: Record<string, string>;
    /**
     * Specify either a single file or an array of filenames to put in place for the man program to find.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#man
     */
    man?: string | string[];
    /**
     * The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
     */
    directories?: Directories;
    /**
     * Specify the place where your code lives. This is helpful for people who want to contribute.
     * If the git repo is on GitHub, then the npm docs command will be able to find you.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
     */
    repository?: Repository | string;

    /**
     * Script commands that are run at various times in the lifecycle of your package.
     * The key is the lifecycle event, and the value is the command to run at that point.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
     */
    scripts?: Record<string, string>;
    /**
     * A "config" object can be used to set configuration parameters used in package scripts that persist across upgrades.
     * It could have a `start` command that referenced the `npm_package_config_port` environment variable.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#config
     */
    config?: Record<string, string>;

    /**
     * Dependencies are specified in a simple object that maps a package name to a version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies
     */
    dependencies?: Record<string, string>;
    /**
     * If someone is planning on downloading and using your module in their program,
     * then they probably don't want or need to download and build the external test or documentation framework that you use.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devdependencies
     */
    devDependencies?: Record<string, string>;
    /**
     * In some cases, you want to express the compatibility of your package with a host tool or library,
     * while not necessarily doing a require of this host. This is usually referred to as a plugin.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependencies
     */
    peerDependencies?: Record<string, string>;
    /**
     * When a user installs your package, npm will emit warnings if packages specified in peerDependencies are not already installed.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependenciesmeta
     */
    peerDependenciesMeta?: Record<string, PeerDependencyMeta>;
    /**
     * This defines an array of package names that will be bundled when publishing the package.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bundledependencies
     */
    bundleDependencies?: string[];
    /**
     * If a dependency can be used, but you would like npm to proceed if it cannot be found or fails to install,
     * then you may put it in the optionalDependencies object.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#optionaldependencies
     */
    optionalDependencies?: Record<string, string>;
    /**
     * If you need to make specific changes to dependencies of your dependencies,
     * for example replacing the version of a dependency with a known security issue,
     * replacing an existing dependency with a fork, or making sure that the same version of a package is used everywhere,
     * then you may add an override.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
     */
    overrides?: Record<string, string>;
    /** You can specify the version of node that your stuff works on.
     * And, like with dependencies, if you don't specify the version (or if you specify "*" as the version), then any version of node will do.
     * You can also use the "engines" field to specify which versions of npm are capable of properly installing your program.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
     */
    engines?: Record<string, string>;
    /**
     * You can specify which operating systems your module will run on.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#os
     */
    os?: string[];
    /**
     * If your code only runs on certain cpu architectures, you can specify which ones.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
     */
    cpu?: string[];
    /**
     * If you set "private": true in your package.json, then npm will refuse to publish it.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#private
     */
    private?: boolean;
    /**
     * This is a set of config values that will be used at publish-time.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
     */
    publishConfig?: string[];
    /**
     * The optional workspaces field is an array of file patterns that describes locations
     * within the local file system that the install client should look up to find each workspace
     * that needs to be symlinked to the top level node_modules folder.
     * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#workspaces
     */
    workspaces?: string[];
}

/**
 * The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.
 * You can specify either one or both values. If you want to provide only a url, you can specify the value for "bugs" as a simple string instead of an object.
 * If a url is provided, it will be used by the npm bugs command.
 */
interface Bug {
    /**
     * The url to send bugs to.
     * @example "https://github.com/owner/project/issues"
     */
    url?: string;
    /**
     * The email to send bugs to.
     * @example "project@hostname.com"
     */
    email?: string;
}

/**
 * The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object.
 * If you look at npm's package.json, you'll see that it has directories for doc, lib, and man.
 */
interface Directories {
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

/**
 * Up-to-date information about ways to help fund development of your package.
 */
interface Funding {
    /**
     * Funding type.
     * @example individual
     * @example patreon
     */
    type: string;
    /**
     * Funding url.
     * @example http://example.com/donate
     * @example https://www.patreon.com/my-account
     */
    url: string;
}

/**
 * When a user installs your package, npm will emit warnings if packages specified in peerDependencies are not already installed.
 * The peerDependenciesMeta field serves to provide npm more information on how your peer dependencies are to be used.
 * Specifically, it allows peer dependencies to be marked as optional.
 */
interface PeerDependencyMeta {
    /**
     * Marking a peer dependency as optional ensures npm will not emit a warning if the soy-milk package is not installed on the host.
     * This allows you to integrate and interact with a variety of host packages without requiring all of them to be installed.
     */
    optional: boolean;
}

/**
 * Author and Contributors type.
 */
interface Person {
    /** The person's name. */
    name: string;
    /** The person's email. */
    email?: string;
    /** The person's url. */
    url?: string;
}

/**
 * Specify the place where your code lives. This is helpful for people who want to contribute.
 * If the git repo is on GitHub, then the npm docs command will be able to find you.
 */
interface Repository {
    /** Repo type. */
    type: string;
    /** Repo url. */
    url: string;
    /** Repo directory. */
    directory?: string;
}

export { PackageJson, Bug, Directories, Funding, PeerDependencyMeta, Person, Repository };
