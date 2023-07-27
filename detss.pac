function FindProxyForURL(url, host) {
    const PROXY = "PROXY s415078c.detss.corpintra.net:3128";

    // polygran.de via proxy
    if (shExpMatch(host, "*polygran.de")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
