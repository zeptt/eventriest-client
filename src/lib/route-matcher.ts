export function routeMatcher(currentUrl: string, urlsToBeMatched: string[]): boolean {
    // also allow wildcard matching
    // eg. /event* will match /event, /event/1, /event/1/2, etc.
    const match = (pattern: string, url: string) => {
        const regex = new RegExp(`^${pattern.replace("*", ".*")}$`);
        return regex.test(url);
    };

    return urlsToBeMatched.some((url) => match(url, currentUrl));
}