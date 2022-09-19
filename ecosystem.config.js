module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'surya',
      host : '192.168.1.88',
      ref  : 'origin/master',
      repo : 'git@github.com/Surya5602/Basicnodeapp',
      path : '/opt/deployment/jenkins-nodeserver/source',
      
    }
  }
};
