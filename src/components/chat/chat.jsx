import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled as styled1 } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddSharpIcon from "@mui/icons-material/AddSharp";
export const Chat = () => {
  const [chats, setChats] = useState([]);

  const [chat, setChat] = useState({});

  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [userName, setUserName] = useState("");

  const [newChatName, setNewChatName] = useState("");

  const handleChange = (event, newAlignment) => {
    setChat(event.target.value);
  };

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setChats(data.Items));

    console.log("In get chats, chats: ");
    chats.forEach((c) => console.log(c.chatId));
  }

  function addChatMessage() {
    const chatMessage = {
      chatId: chat.id,
      username: userName,
      text: message,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(chatMessage),
    })
      .then((response) => response.json()) // pull the json out of the response
      .then((data) => console.log(data));
  }

  function addChat() {
    const chat = {
      name: newChatName,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chat),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function useInterval(callback, delay, ...callbackParams) {
    const savedCallback = useRef();

    // remember the latest callback
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // setup the interval
    useEffect(() => {
      function tick() {
        savedCallback.current(callbackParams);
      }

      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [callback, delay, callbackParams]);
  }

  useInterval(
    (params) => {
      const chatId = chat.id; //params[0];
      fetch(
        `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
      )
        .then((response) => response.json())
        .then((data) => {
          setChatMessages(data.Items);
        });
    },
    1000, // fast polling
    //60000, // slow polling
    chat.id
  );

  return (
    <div>
      <h1>Chat!</h1>
      <div
        id="chatDiv"
        style={{
          display: "flex",
          justifyContent: "center",
          //alignItems: "center",
          //height: "100vh",
        }}
      >
        <FormControl sx={{ minWidth: 120 }}>
          <div>
            <InputLabel id="demo-select-label">Select a chat...</InputLabel>
            <Select
              labelId="demo-select-label"
              id="demo-select"
              onChange={handleChange}
              onOpen={getChats}
              label="Select a chat..."
              style={{ minWidth: 250 }}
            >
              {chats.map((chat) => (
                <MenuItem key={chat.chatId} value={chat}>
                  {chat.name}
                </MenuItem>
              ))}
            </Select>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              id="outlined-basic"
              label="Create new chat..."
              multiline
              variant="outlined"
              onChange={(event) => setNewChatName(event.target.value)}
            />
            &nbsp;&nbsp;
            <Button variant="contained" onClick={addChat} size="large">
              <AddSharpIcon />
            </Button>
          </div>

          <br />

          <TextField
            id="outlined-basic"
            label="Enter your username here..."
            multiline
            variant="outlined"
            onChange={(event) => setUserName(event.target.value)}
          />

          <br />
          <TextField
            id="outlined-basic"
            label="Enter your message here..."
            multiline
            variant="outlined"
            onChange={(event) => setMessage(event.target.value)}
          />

          <br />
          <br />
          <Button variant="contained" onClick={addChatMessage} size="large">
            Post
          </Button>
        </FormControl>
      </div>

      <br />

      {chatMessages.map((chatMessage) => (
        <ChatMessageItem
          text={chatMessage.text}
          userName={chatMessage.username}
        />
      ))}
    </div>
  );
};

const ChatMessageItem = (props) => {
  const Item = styled1(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Stack spacing={2} className="grid">
      <Item>{props.userName + ": " + props.text}</Item>
      <br />
    </Stack>
  );
};
