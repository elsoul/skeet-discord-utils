export declare const discordChangeLog: (discordToken: string, repoName: string, channelIds: string[], lang?: string) => Promise<string>;
export type ReleaseInfo = {
    tag: string;
    draft: boolean;
    prerelease: boolean;
    author: string;
    created: string;
    published: string;
    url: string;
    whatsChanged: string;
};
export declare function getReleaseInfoAsJson(repoName: string): ReleaseInfo;
