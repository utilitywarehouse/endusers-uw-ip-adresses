function FindProxyForURL(url, host) {
     /*FORWARD (explicit) gpcloudservice.com DIRECT*/
        if (shExpMatch(host, "*.gpcloudservice.com"))
           { 
            return "DIRECT;"
           }
    /*No proxy for private (RFC 1918/5735) IP addresses */
        if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
           isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0") ||
           isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
           isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) 
          {
           return "DIRECT";
          }
    /* FORWARD *.cf.uw.systems to PrismaEP  */
        if (shExpMatch(host, "*.cf.uw.systems"))
           {
            return "PROXY uwcb.proxy.prismaaccess.com:8080;"
           }
    /* DIRECT ACCESS all the rest */
    return "DIRECT";
}
