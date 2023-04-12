function FindProxyForURL(url, host) {
     /*FORWARD (explicit) gpcloudservice.com DIRECT*/
        if (shExpMatch(host, "*.gpcloudservice.com"))
        return "DIRECT;"
    /* FORWARD *.cf.uw.systems to PrismaEP  */
        if (shExpMatch(host, "*.cf.uw.systems"))
        return "PROXY uwcb.proxy.prismaaccess.com:8080;"
    /* DIRECT ACCESS all the rest */
    return "DIRECT";
}
