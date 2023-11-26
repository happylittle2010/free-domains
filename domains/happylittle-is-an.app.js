addSubDomain({
  description: 'happylittle-s subdomain', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'happylittle', // desired subdomain name
  owner: {
    email: 'happylittle2010@outlook.com',
  },
  record: {
    CNAME: 'cname.vercel-dns.com',
  },
  proxy: false,
})