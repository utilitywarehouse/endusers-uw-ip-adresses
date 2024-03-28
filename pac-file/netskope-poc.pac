function FindProxyForURL(url, host) {
    /* Bypass localhost and Private IPs */
    var resolved_ip = dnsResolve(host);
    if (isPlainHostName(host) ||
    shExpMatch(host, "*.local") ||
       /* Bypass PureCloud CIDR */
    isInNet(resolved_ip, "52.129.96.0", "255.255.240.0") ||
    isInNet(resolved_ip, "169.150.104.0", "255.255.248.0") ||
      /* Bypass RFC-1918 */
    isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
    isInNet(resolved_ip, "172.16.0.0",  "255.240.0.0") ||
    isInNet(resolved_ip, "192.168.0.0",  "255.255.0.0") ||
      /* Bypass RFC 5735*/
    isInNet(resolved_ip, "127.0.0.0", "255.0.0.0"))
    return "DIRECT";
    /* Bypass SAML, e.g. Okta */
    if (shExpMatch(host, "*.okta.com") || shExpMatch(host, "*.oktacdn.com") || shExpMatch(host, "login.uw.systems") || shExpMatch(host, "accounts.google.com"))
        return "DIRECT";
        /* Bypass 1e100.net for CB login */
    if (shExpMatch(host, "*.1e100.net"))
        return "DIRECT";
    /* Bypass PureCloud URLs */
    if (shExpMatch(host, "*.mypurecloud.ie")  || shExpMatch(host, "*.pure.cloud")  || shExpMatch(host, "*.genesys.com") || shExpMatch(host, "*.genesyscsp.com"))
        return "DIRECT";
    /* Bypass Google if proxy is not reachable */
        if (shExpMatch(host, "*.google.com") || shExpMatch(host, "*.google.co.uk"))
        return "PROXY eproxy-uw.goskope.com:8081; DIRECT;"
    /* Forward to Netskope */
    return "PROXY eproxy-uw.goskope.com:8081";

}

