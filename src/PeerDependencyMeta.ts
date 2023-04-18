/**
 * When a user installs your package, npm will emit warnings if packages specified in peerDependencies are not already installed.
 * The peerDependenciesMeta field serves to provide npm more information on how your peer dependencies are to be used.
 * Specifically, it allows peer dependencies to be marked as optional.
 */
export default interface PeerDependencyMeta {
    /**
     * Marking a peer dependency as optional ensures npm will not emit a warning if the soy-milk package is not installed on the host.
     * This allows you to integrate and interact with a variety of host packages without requiring all of them to be installed.
     */
    optional: boolean;
}
