# cookie

1. 减少cookie大小

cookie 被用于身份认证, 个性化设置等诸多用途。Cookie通过http头在服务器和浏览器之间来回传送, 减少cookie大小可以降低其对影响速度的影响

+ 去除不必要的cookie

+ 尽量压缩cookie的大小

+ 注意设置cookie的domain级别, 如果没有必要, 不要影响到 sub-domain(支持的子域名)

> domain:该cookie支持的域名,在跨域操作的时候，可以设置它

2. 静态资源使用无cookie域名

静态资源一般无需使用cookie, 可以把它们放在使用二级域名或者专门域名的无cookie服务器上, 降低cookie传送造成的流量浪费, 提高响应速度

