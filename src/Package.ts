import Bug from "./Bug";
import Funding from "./Funding";
import Person from "./Person";

/**
 * A package.json representation
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json
 */
export default interface Package {
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
   *   "license" : "SEE LICENSE IN <filename>"
   * }
   * ```
   *
   * Then include a file named <filename> at the top level of the package.
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
   */
  funding: string | Funding | Funding[];
}
