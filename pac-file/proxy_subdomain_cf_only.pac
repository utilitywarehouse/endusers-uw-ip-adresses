function FindProxyForURL(url, host) {
    /* FORWARD *.cf.uw.systems to PrismaEP  */
        if (shExpMatch(host, "*.cf.uw.systems"))
        return "PROXY uwcb.proxy.prismaaccess.com:8080;"
    /* DIRECT ACCESS all the rest */
    return "DIRECT";
}
