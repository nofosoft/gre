import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import { useEffect, useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Octokit } from "@octokit/rest";

const TOKEN = "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";

function App() {
  const [typingKeys, setTypingKeys] = useState<string>("");

  interface userObj {
    id: number;
    username: any;
  }
  const [username, setUsername] = useState<userObj[]>([]);
  interface repoObj {
    id: number;
    username: any;
    repos: any;
    url: any;
    desc: any;
    lang: any;
    rate: number;
    watchers: number;
  }
  const [repos, setRepos] = useState<repoObj[]>([]);

  const onHandleTypeing = (event: any) => {
    // console.log(event.target.value);
    setTypingKeys(event.target.value);
  };

  const onHandleSearch = async () => {
    // console.log("search for " + typingKeys);
    getUsernameData(typingKeys);
  };

  const getUsernameData = async (keywords: string) => {
    setUsername([]);
    const octokit = new Octokit({
      auth: TOKEN,
    });
    const {
      data: {},
    } = await octokit.rest.users.getAuthenticated();
    // console.log("Hello, %s", login);

    try {
      const get_user = await octokit.search.users({
        q: keywords,
      });

      const { items } = get_user.data;
      items.map((item, idx) => {
        if (idx < 5) {
          const newObject: userObj = {
            id: idx,
            username: item.login,
          };
          setUsername((prevState) => [...prevState, newObject]);
          getReposData(item.login);
        }
      });
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  const getReposData = async (keywords: string) => {
    setRepos([]);
    const octokit = new Octokit({
      auth: TOKEN,
    });
    const {
      data: {},
    } = await octokit.rest.users.getAuthenticated();
    // console.log("Hello, %s", login);

    try {
      const response = await octokit.request("GET /users/{user}/repos", {
        user: keywords,
      });

      const details = response.data;
      details.map((items: any, idx: number) => {
        // console.log(items);
        const newObject: repoObj = {
          id: idx,
          username: keywords,
          repos: items.name,
          url: items.clone_url,
          desc: items.description,
          lang: items.language,
          rate: items.stargazers_count,
          watchers: items.watchers,
        };
        setRepos((prevState) => [...prevState, newObject]);
      });
    } catch (error) {
      //console.error('Error:', error);
    }
  };

  useEffect(() => {
    username.map((user, idx) => {
      repos.map((repo, idx) => {
        if (user.username == repo.username) {
          // console.log(user.username + ":" + repo.repos);
        }
      });
    });
  }, [username, repos]);

  return (
    <>
      <Heading
        onHandleTypeing={onHandleTypeing}
        onHandleSearch={onHandleSearch}
      />
      <Content
        search={typingKeys}
        founded={0}
        usernames={username}
        repos={repos}
      />
    </>
  );
}

export default App;
