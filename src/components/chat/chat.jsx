import { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled as styled1 } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelect from "@mui/material/Select";
import PropTypes from "prop-types";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled as styled2 } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddSharpIcon from "@mui/icons-material/AddSharp";
export const Chat = () => {
  const [chats, setChats] = useState([
    // { chatId: "18fa1c30-c741-4fa2-9b02-190f3dfcfccc", name: "Chat 1" },
    // { chatId: "18fa1c30-c741-4fa2-9b02-190f3dfcfccc", name: "Chat 2" },
  ]);

  const [chat, setChat] = useState({
    // id: "18fa1c30-c741-4fa2-9b02-190f3dfcfccc",
    // name: "demoSiteChat",
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [userName, setUserName] = useState("");

  const [newChatName, setNewChatName] = useState("");

  const handleChange = (event, newAlignment) => {
    setChat(event.target.value);
    console.log("val: " + event.target.value);
    //setChatMessages([]);
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

    //setChatMessages([...chatMessages, { text: message }]);
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

  // useInterval((params) => {
  //   fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setChats(data.Items);
  //     });
  // }, 1000);

  // function getChatMessages() {
  //   fetch(
  //     "https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/18fa1c30-c741-4fa2-9b02-190f3dfcfccc/messages"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setChatMessages(data.Items));
  //   console.log("chats: " + chatMessages);
  // }

  return (
    <div id="chatDiv">
      <h1>Chat!</h1>

      <FormControl sx={{ minWidth: 120 }}>
        <div>
          <InputLabel id="demo-select-label">Select a chat...</InputLabel>
          <Select
            labelId="demo-select-label"
            id="demo-select"
            //value={chat}
            onChange={handleChange}
            onOpen={getChats}
            label="Select a chat..."
            style={{ minWidth: 250 }}
            //MenuProps={MenuProps}
          >
            {chats.map((chat) => (
              <MenuItem
                key={chat.chatId}
                value={chat}
                //style={getStyles(name, personName, theme)}
              >
                {chat.name}
              </MenuItem>
            ))}
          </Select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <br />
        <br /> */}
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
