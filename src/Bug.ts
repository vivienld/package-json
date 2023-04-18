/**
 * The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.
 * You can specify either one or both values. If you want to provide only a url, you can specify the value for "bugs" as a simple string instead of an object.
 * If a url is provided, it will be used by the npm bugs command.
 */
export default interface Bug {
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
