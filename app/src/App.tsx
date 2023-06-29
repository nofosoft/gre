import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

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

  return (
    <>
      <Heading onHandleTypeing={onHandleTypeing} />
      <Content search={typingKeys} founded={0} dataUsers={dataUsers} />
    </>
  );
}

export default App;
