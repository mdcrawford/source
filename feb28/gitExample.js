let axios = require("axios");

function getGitData() {
  axios
    .get(
      "https://api.github.com/repos/mdcrawford/source/commits?since=2018-02-14T00:00:00Z"
    )
    .then(response => {
      let commits = response.data;
      commits.map(data => {
        console.log(data.commit.message);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

getGitData();
