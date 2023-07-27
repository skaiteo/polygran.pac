function FindProxyForURL(url, host) {
    const PROXY = "PROXY S633K0000003.my633.corpintra.net:3128";

    // polygran.de via proxy
    if (shExpMatch(host, "*polygran.de")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
