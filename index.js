require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "Mehar-Zain",
  id: 217237870,
  node_id: "U_kgDODPLJbg",
  avatar_url: "https://avatars.githubusercontent.com/u/217237870?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Mehar-Zain",
  html_url: "https://github.com/Mehar-Zain",
  followers_url: "https://api.github.com/users/Mehar-Zain/followers",
  following_url:
    "https://api.github.com/users/Mehar-Zain/following{/other_user}",
  gists_url: "https://api.github.com/users/Mehar-Zain/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Mehar-Zain/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Mehar-Zain/subscriptions",
  organizations_url: "https://api.github.com/users/Mehar-Zain/orgs",
  repos_url: "https://api.github.com/users/Mehar-Zain/repos",
  events_url: "https://api.github.com/users/Mehar-Zain/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Mehar-Zain/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2025-06-20T16:32:15Z",
  updated_at: "2025-08-19T16:34:53Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/insta", (req, res) => {
  res.send("Hello Mehar Zain");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
