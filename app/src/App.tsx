import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import { useEffect, useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Octokit } from "@octokit/rest";

const TOKEN = import.meta.env.VITE_TOKEN;
// console.log(TOKEN);

function App() {
  const [typingKeys, setTypingKeys] = useState<string>("");
  const [typingKeysTemp, setTypingKeysTemp] = useState<string>("");
  const [userFound, setUserFound] = useState<number>(0);

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
    // console.log(userFound);
    setUserFound(username.length);
    username.map((user) => {
      repos.map((repo) => {
        if (user.username == repo.username) {
          // console.log(user.username + ":" + repo.repos);
        }
      });
    });
  }, [username, repos, userFound]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call your function here
      // console.log("typeing: " + typingKeys);
      if (typingKeys != typingKeysTemp) {
        getUsernameData(typingKeys);
      }
      setTypingKeysTemp(typingKeys);
    }, 1000); // 1000 milliseconds = 1 second

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [typingKeys, typingKeysTemp]);

  return (
    <>
      <Heading
        onHandleTypeing={onHandleTypeing}
        onHandleSearch={onHandleSearch}
      />
      <Content
        search={typingKeys}
        founded={userFound}
        usernames={username}
        repos={repos}
      />
    </>
  );
}

export default App;
