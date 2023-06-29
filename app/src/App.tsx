import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import { useEffect, useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Octokit } from "@octokit/rest";

function App() {
  const [typingKeys, setTypingKeys] = useState<string>("");
  const [dataUsers, setDataUsers] = useState({
    title: "Data users",
    data: [
      {
        id: 1,
        username: "arhscrypt",
        repos: [
          {
            id: 1,
            name: "scanme",
            desc: "this is description of repositories",
            rate: 20,
          },
          {
            id: 2,
            name: "github",
            desc: "this is description of repositories",
            rate: 13,
          },
        ],
      },
      {
        id: 2,
        username: "jajangcode",
        repos: [
          {
            id: 1,
            name: "scanme",
            desc: "this is description of repositories",
            rate: 13,
          },
          {
            id: 2,
            name: "github",
            desc: "this is description of repositories",
            rate: 11,
          },
          {
            id: 3,
            name: "asdjaf",
            desc: "this is description of repositories",
            rate: 9,
          },
        ],
      },
    ],
  });

  const onHandleTypeing = (event: any) => {
    // console.log(event.target.value);
    setTypingKeys(event.target.value);
  };

  const onHandleSearch = async () => {
    // console.log("onHandleSearch");
    getUsernameData(typingKeys);
  };

  interface userObj {
    id: number;
    name: any;
  }
  const [username, setUsername] = useState<userObj[]>([]);

  const getUsernameData = async (keywords: string) => {
    setUsername([]);
    const octokit = new Octokit({
      auth: "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",
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
            name: item.login,
          };
          setUsername((prevState) => [...prevState, newObject]);
        }
      });
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  interface repoObj {
    id: number;
    repos: any;
  }
  const [repos, setRepos] = useState<repoObj[]>([]);

  const getReposData = async (keywords: string) => {
    setRepos([]);
    const octokit = new Octokit({
      auth: "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",
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
        const newObject: repoObj = {
          id: idx,
          repos: items.name,
        };
        setRepos((prevState) => [...prevState, newObject]);
      });
    } catch (error) {
      //console.error('Error:', error);
    }
  };

  useEffect(() => {
    username.map((item, idx) => {
      console.log(item);
      getReposData(item.name);
    });
    repos.map((item, idx) => {
      console.log(item);
    });
  }, [username, repos]);

  return (
    <>
      <Heading
        onHandleTypeing={onHandleTypeing}
        onHandleSearch={onHandleSearch}
      />
      <Content search={typingKeys} founded={0} dataUsers={dataUsers} />
    </>
  );
}

export default App;
