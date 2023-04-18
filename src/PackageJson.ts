import Bug from "./Bug";
import Funding from "./Funding";
import Person from "./Person";
import Directories from "./Directories";
import Repository from "./Repository";
import PeerDependencyMeta from "./PeerDependencyMeta";

/**
 * A package.json representation
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json
 */
export default interface PackageJson {
    /**
     * If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required.
     * The name and version together form an identifier that is assumed to be completely unique.
     * Changes to the package should come along with changes to the version.
     * If you don't plan to publish your package, the name and version fields are optional.
     * The name is what your thing is called.
     *
     * Some rules:
     *
     * - The name must be less than or equal to 214 characters. This includes the scope for scoped packages.
     * - The names of scoped packages can begin with a dot or an underscore. This is not permitted without a scope.
     * - New packages must not have uppercase letters in the name.
     * - The name ends up being part of a URL, an argument on the command line, and a folder name. Therefore, the name can't contain any non-URL-safe characters.
     *
     * Some tips:
     *
     * - Don't use the same name as a core Node module.
     * - Don't put "js" or "node" in the name. It's assumed that it's js, since you're writing a package.json file, and you can specify the engine using the "engines" field. (See below.)
     * - The name will probably be passed as an argument to require(), so it should be something short, but also reasonably descriptive.
     * - You may want to check the npm registry to see if there's something by that name already, before you get too attached to it. https://www.npmjs.com/
     *
     * A name can be optionally prefixed by a scope, e.g. @myorg/mypackage. See scope for more detail.
     */
    name: string;
    /**
     * If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required.
     * The name and version together form an identifier that is assumed to be completely unique.
     * Changes to the package should come along with changes to the version.
     * If you don't plan to publish your package, the name and version fields are optional.
     *
     * Version must be parseable by node-semver, which is bundled with npm as a dependency. (npm install semver to use it yourself.)
     */
    version: string;
    /**
     * Put a description in it. It's a string. This helps people discover your package, as it's listed in `npm search`.
     * */
    description: string;
    /**
     * Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in `npm search`.
     */
    keywords?: string[];
    /**
     * The url to the project homepage.
     * @example "https://github.com/owner/project#readme"
     */
    homepage?: string;
    /**
     * The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.
     * You can specify either one or both values. If you want to provide only a url, you can specify the value for "bugs" as a simple string instead of an object.
     * If a url is provided, it will be used by the npm bugs command.
     */
    bugs?: Bug;
    /**
     * You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.
     *
     * If you're using a common license such as BSD-2-Clause or MIT, add a current SPDX license identifier for the license you're using, like this:
     * ```
     * {
     *    "license" : "BSD-3-Clause"
     * }
     * ```
     *
     * You can check the full list of SPDX license IDs. Ideally you should pick one that is OSI approved.
     * If your package is licensed under multiple common licenses, use an SPDX license expression syntax version 2.0 string, like this:
     * ```
     * {
     *   "license" : "(ISC OR GPL-3.0)"
     * }
     * ```
     *
     * If you are using a license that hasn't been assigned an SPDX identifier, or if you are using a custom license, use a string value like this one:
     * ```
     * {
     *   "license" : "SEE LICENSE IN `<filename>`"
     * }
     * ```
     *
     * Then include a file named `<filename>` at the top level of the package.
     *
     * Some old packages used license objects or a "licenses" property containing an array of license objects:
     * ```
     * // Not valid metadata
     * {
     *   "license" : {
     *     "type" : "ISC",
     *     "url" : "https://opensource.org/licenses/ISC"
     *   }
     * }
     *
     * // Not valid metadata
     * {
     *   "licenses" : [
     *     {
     *       "type": "MIT",
     *       "url": "https://www.opensource.org/licenses/mit-license.php"
     *     },
     *     {
     *       "type": "Apache-2.0",
     *       "url": "https://opensource.org/licenses/apache2.0.php"
     *     }
     *   ]
     * }
     * ```
     *
     * Those styles are now deprecated. Instead, use SPDX expressions, like this:
     * ```
     * {
     *   "license": "ISC"
     * }
     * {
     *   "license": "(MIT OR Apache-2.0)"
     * }
     * ```
     *
     * Finally, if you do not wish to grant others the right to use a private or unpublished package under any terms:
     * ```
     * {
     *   "license": "UNLICENSED"
     * }
     * ```
     *
     * Consider also setting "private": true to prevent accidental publication.
     *
     */
    license: string;
    /**
     * The author of the project
     */
    author: Person | string;
    /**
     * The contributors of the project.
     */
    contributors?: Person[];
    /**
     * Up-to-date information about ways to help fund development of your package.
     * Users can use the npm fund subcommand to list the funding URLs of all dependencies of their project, direct and indirect.
     * A shortcut to visit each funding url is also available when providing the project name such as: npm fund <projectname>
     * (when there are multiple URLs, the first one will be visited)
     */
    funding: string | Funding | Funding[];
    /**
     * The optional files field is an array of file patterns that describes the entries to be included
     * when your package is installed as a dependency.
     * File patterns follow a similar syntax to .gitignore, but reversed: including a file, directory,
     * or glob pattern (*, **, and such) will make it so that file is included in the tarball when it's packed.
     * Omitting the field will make it default to ["*"], which means it will include all files.
     *
     * Some special files and directories are also included or excluded regardless of whether they exist in the files array (see below).
     *
     * You can also provide a .npmignore file in the root of your package or in subdirectories, which will keep files from being included.
     * At the root of your package it will not override the "files" field, but in subdirectories it will.
     * The .npmignore file works just like a .gitignore. If there is a .gitignore file, and .npmignore is missing,
     * .gitignore's contents will be used instead.
     *
     * Files included with the "package.json#files" field cannot be excluded through .npmignore or .gitignore.
     *
     * Certain files are always included, regardless of settings:
     *
     * - package.json
     * - README
     * - LICENSE / LICENCE
     * - The file in the "main" field
     * - README & LICENSE can have any case and extension.
     *
     * Conversely, some files are always ignored:
     *
     * - .git
     * - CVS
     * - .svn
     * - .hg
     * - .lock-wscript
     * - .wafpickle-N
     * - .*.swp
     * - .DS_Store
     * - ._*
     * - npm-debug.log
     * - .npmrc
     * - node_modules
     * - config.gypi
     * - *.orig
     * - package-lock.json (use npm-shrinkwrap.json if you wish it to be published)
     */
    files?: string[];
    /**
     * The main field is a module ID that is the primary entry point to your program.
     * That is, if your package is named foo, and a user installs it, and then does require("foo"),
     * then your main module's exports object will be returned.
     *
     * This should be a module relative to the root of your package folder.
     *
     * For most modules, it makes the most sense to have a main script and often not much else.
     *
     * If main is not set it defaults to index.js in the package's root folder.
     */
    main?: string;
    /**
     * If your module is meant to be used client-side the browser field should be used instead of the main field.
     * This is helpful to hint users that it might rely on primitives that aren't available in Node.js modules. (e.g. window)
     */
    browser?: string;
    /**
     * A lot of packages have one or more executable files that they'd like to install into the PATH. npm makes this pretty easy
     * (in fact, it uses this feature to install the "npm" executable.)
     *
     * To use this, supply a bin field in your package.json which is a map of command name to local file name.
     * When this package is installed globally, that file will be either linked inside the global bins directory or a cmd (Windows Command File)
     * will be created which executes the specified file in the bin field, so it is available to run by name or name.cmd (on Windows PowerShell).
     *
     * When this package is installed as a dependency in another package,
     * the file will be linked where it will be available to that package either directly by npm exec
     * or by name in other scripts when invoking them via npm run-script.
     *
     * Please make sure that your file(s) referenced in bin starts with #!/usr/bin/env node, otherwise the scripts are started without the node executable!
     *
     * Note that you can also set the executable files using `directories.bin`.
     *
     * See folders for more info on executables.
     */
    bin?: Map<string, string>;
    /**
     * Specify either a single file or an array of filenames to put in place for the man program to find.
     *
     * If only a single file is provided, then it's installed such that it is the result from man `<pkgname>`, regardless of its actual filename.
     *
     * Man files must end with a number, and optionally a .gz suffix if they are compressed.
     * The number dictates which man section the file is installed into.
     *
     * @example "./man/doc.1"
     *
     * @example  ["./man/foo.1","./man/bar.1"]
     */
    man?: string | string[];
    /**
     * The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object.
     * If you look at npm's package.json, you'll see that it has directories for doc, lib, and man.
     * The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object.
     * If you look at npm's package.json, you'll see that it has directories for doc, lib, and man.
     *
     * In the future, this information may be used in other creative ways.
     */
    directories?: Directories;
    /**
     * Specify the place where your code lives. This is helpful for people who want to contribute.
     * If the git repo is on GitHub, then the npm docs command will be able to find you.
     *
     * @example
     * {
     *  "repository": {
     *    "type": "git",
     *    "url": "https://github.com/facebook/react.git",
     *    "directory": "packages/react-dom"
     *  }
     *}
     */
    repository?: Repository | string;

    /**
     * Script commands that are run at various times in the lifecycle of your package.
     * The key is the lifecycle event, and the value is the command to run at that point.
     */
    scripts?: Map<string, string>;
    /**
     * A "config" object can be used to set configuration parameters used in package scripts that persist across upgrades.
     * It could have a `start` command that referenced the `npm_package_config_port` environment variable.
     */
    config?: Map<string, string>;

    /**
     * Dependencies are specified in a simple object that maps a package name to a version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.
     *
     * Please do not put test harnesses or transpilers or other "development" time tools in your dependencies object. See devDependencies, below.
     *
     * See semver for more details about specifying version ranges.
     *
     * - `version` Must match version exactly
     * - `>version` Must be greater than version
     * - `>=`version etc
     * - `<version`
     * - `<=`version
     * - `~version` "Approximately equivalent to version" See semver
     * - `^version` "Compatible with version" See semver
     * - `1.2.x` 1.2.0, 1.2.1, etc., but not 1.3.0
     * - `http://...` See 'URLs as Dependencies' below
     * - `\*` Matches any version
     * - `""` (just an empty string) Same as *
     * - `version1 - version2` Same as >=version1 <=version2.
     * - `range1 || range2` Passes if either range1 or range2 are satisfied.
     * - `git...` See 'Git URLs as Dependencies' below
     * - `user/repo` See 'GitHub URLs' below
     * - `tag` A specific version tagged and published as tag See npm dist-tag
     * - `path/path/path` See Local Paths below
     *
     * @example
     * {
     *   "dependencies": {
     *     "foo": "1.0.0 - 2.9999.9999",
     *     "bar": ">=1.0.2 <2.1.2",
     *     "baz": ">1.0.2 <=2.3.4",
     *     "boo": "2.0.1",
     *     "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
     *     "asd": "http://asdf.com/asdf.tar.gz",
     *     "til": "~1.2",
     *     "elf": "~1.2.3",
     *     "two": "2.x",
     *     "thr": "3.3.x",
     *     "lat": "latest",
     *     "dyl": "file:../dyl"
     *   }
     * }
     */
    dependencies?: Map<string, string>;
    /**
     * If someone is planning on downloading and using your module in their program,
     * then they probably don't want or need to download and build the external test or documentation framework that you use.
     *
     * In this case, it's best to map these additional items in a devDependencies object.
     *
     * These things will be installed when doing npm link or npm install from the root of a package,
     * and can be managed like any other npm configuration param. See config for more on the topic.
     *
     * For build steps that are not platform-specific, such as compiling CoffeeScript or other languages to JavaScript,
     * use the prepare script to do this, and make the required package a devDependency.
     */
    devDependencies?: Map<string, string>;
    /**
     * In some cases, you want to express the compatibility of your package with a host tool or library,
     * while not necessarily doing a require of this host. This is usually referred to as a plugin.
     * Notably, your module may be exposing a specific interface, expected and specified by the host documentation.
     *
     * In npm versions 3 through 6, peerDependencies were not automatically installed,
     * and would raise a warning if an invalid version of the peer dependency was found in the tree.
     * As of npm v7, peerDependencies are installed by default.
     *
     * Trying to install another plugin with a conflicting requirement may cause an error if the tree cannot be resolved correctly.
     * For this reason,   make sure your plugin requirement is as broad as possible, and not to lock it down to specific patch versions.
     *
     * Assuming the host complies with semver, only changes in the host package's major version will break your plugin.
     * Thus, if you've worked with every 1.x version of the host package, use "^1.0" or "1.x" to express this.
     * If you depend on features introduced in 1.5.2, use "^1.5.2".
     */
    peerDependencies?: Map<string, string>;
    /**
     * When a user installs your package, npm will emit warnings if packages specified in peerDependencies are not already installed.
     * The peerDependenciesMeta field serves to provide npm more information on how your peer dependencies are to be used.
     * Specifically, it allows peer dependencies to be marked as optional.
     */
    peerDependenciesMeta?: Map<string, PeerDependencyMeta>;
    /**
     * This defines an array of package names that will be bundled when publishing the package.
     * In cases where you need to preserve npm packages locally or have them available through a single file download,
     * you can bundle the packages in a tarball file by specifying the package names in the bundleDependencies array and executing npm pack.
     *
     * We can obtain awesome-web-framework-1.0.0.tgz file by running npm pack.
     * This file contains the dependencies renderized and super-streams which can be installed in a new project
     * by executing npm install awesome-web-framework-1.0.0.tgz.
     * Note that the package names do not include any versions, as that information is specified in dependencies.
     *
     * If this is spelled "bundledDependencies", then that is also honored.
     *
     * Alternatively, "bundleDependencies" can be defined as a boolean value.
     * A value of true will bundle all dependencies, a value of false will bundle none.
     *
     * @example ["renderized","super-streams"]
     */
    bundleDependencies?: string[];
    /**
     * If a dependency can be used, but you would like npm to proceed if it cannot be found or fails to install,
     * then you may put it in the optionalDependencies object.
     * This is a map of package name to version or url, just like the dependencies object.
     * The difference is that build failures do not cause installation to fail.
     * Running npm install --omit=optional will prevent these dependencies from being installed.
     *
     * It is still your program's responsibility to handle the lack of the dependency.
     *
     * Entries in optionalDependencies will override entries of the same name in dependencies, so it's usually best to only put in one place.
     */
    optionalDependencies?: Map<string, string>;
    /**
     * If you need to make specific changes to dependencies of your dependencies,
     * for example replacing the version of a dependency with a known security issue,
     * replacing an existing dependency with a fork, or making sure that the same version of a package is used everywhere,
     * then you may add an override.
     *
     * Overrides provide a way to replace a package in your dependency tree with another version, or another package entirely.
     * These changes can be scoped as specific or as vague as desired.
     */
    overrides?: Map<string, string>;
    /** You can specify the version of node that your stuff works on.
     * And, like with dependencies, if you don't specify the version (or if you specify "*" as the version), then any version of node will do.
     * You can also use the "engines" field to specify which versions of npm are capable of properly installing your program.
     *
     * Unless the user has set the engine-strict config flag, this field is advisory only and will only produce warnings
     * when your package is installed as a dependency.
     *
     * @example
     * {
     *   "engines": {
     *     "node": ">=0.10.3 <15"
     *   }
     * }
     *
     * @example
     * {
     *   "engines": {
     *     "npm": "~1.0.20"
     *   }
     * }
     */
    engines?: Map<string, string>;
    /**
     * You can specify which operating systems your module will run on.
     * You can also block instead of allowing operating systems, just prepend the blocked os with a '!'
     * The host operating system is determined by process.platform
     *
     * It is allowed to both block and allow an item, although there isn't any good reason to do this.
     *
     * @example
     * {
     *   "os": [
     *     "darwin",
     *     "linux"
     *   ]
     * }
     * @example
     * {
     *   "os": [
     *     "!win32",
     *   ]
     * }
     */
    os?: string[];
    /**
     * If your code only runs on certain cpu architectures, you can specify which ones.
     * Like the os option, you can also block architectures.
     * The host architecture is determined by process.arch
     *
     * @example
     * {
     *   "cpu": [
     *     "x64",
     *     "ia32"
     *   ]
     * }
     *
     * @example
     * {
     *  "cpu": [
     *    "!arm",
     *    "!mips"
     *  ]
     *}
     */
    cpu?: string[];
    /**
     * If you set "private": true in your package.json, then npm will refuse to publish it.
     *
     * This is a way to prevent accidental publication of private repositories.
     * If you would like to ensure that a given package is only ever published to a specific registry
     * (for example, an internal registry), then use the publishConfig dictionary described below
     * to override the registry config param at publish-time.
     */
    private?: boolean;
    /**
     * This is a set of config values that will be used at publish-time.
     * It's especially handy if you want to set the tag, registry or access,
     * so that you can ensure that a given package is not tagged with "latest",
     * published to the global public registry or that a scoped module is private by default.
     *
     * See config to see the list of config options that can be overridden.
     */
    publishConfig?: string[];
    /**
     * The optional workspaces field is an array of file patterns that describes locations
     * within the local file system that the install client should look up to find each workspace
     * that needs to be symlinked to the top level node_modules folder.
     *
     * It can describe either the direct paths of the folders to be used as workspaces
     * or it can define globs that will resolve to these same folders.
     *
     * In the following example, all folders located inside the folder ./packages will be treated
     * as workspaces as long as they have valid package.json files inside them.
     *
     * @example
     *
     * {
     *   "name": "workspace-example",
     *   "workspaces": [
     *     "./packages/*"
     *   ]
     * }
     */
    workspaces?: string[];
}
