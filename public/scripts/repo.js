'use strict';

const repos = {};

repos.all = [];

  repos.requestRepos = function(callback) {

      $.get('/github/user/repos')
    // $.ajax({
    //   url: 'https://api.github.com/user/repos',
    //   method: 'GET',
    //   headers: {
    //     Authorization: `token ${githubToken}`
    //   }
    // })
    .then(data => data.forEach(repo => repos.all.push(repo)),

    err => console.error(err)).then(callback);


  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
