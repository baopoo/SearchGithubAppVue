import axios from 'axios'

export const fetchUser = ({ commit }, { value, page }) => {
  console.log(value, page);
  axios
    .get(
      `https://api.github.com/search/users?per_page=10&q=${value}&page=${page}`
    )
    .then((response) => {
      if (response.status === 200) {
        commit("updateUser", response.data.items);
        commit("updateTotalUser", Math.min(response.data.total_count, 1000));
      } else {
        console.log(response.statusCode);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export const fetchRepo = ({ commit }, username) => {
  axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      if (response.status === 200) {
        commit("updateRepo", response.data);
      } else {
        console.log(response.statusCode);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export const fetchUserInfo = ({ commit }, user) => {
  commit("updateUserInfo", user);
};

export const fetchCommit= ({ commit }, {owner, repo}) => {
  axios
    .get( `https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        commit("updateCommits", response.data);
      } else {
        console.log(response.statusCode);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
