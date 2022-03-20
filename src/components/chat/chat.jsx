import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Chat = () => {
  const [chats, setChats] = useState([
    { chatId: 1, name: "Chat 1" },
    { chatId: 2, name: "Chat 2" },
  ]);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [alignment, setAlignment] = useState("chat1");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setChatMessages([]);
  };

  //     const MINUTE_MS = 6000000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getChats();
  //   }, MINUTE_MS);

  //   return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  // }, [])

  function addChatMessage() {
    // const chatMessage = {
    //     chatId: "18fa1c30-c741-4fa2-9b02-190f3dfcfccc",
    //     userName: "demoSiteUser",
    //     text: message
    // };

    // fetch('https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages', {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
    //     },
    //     body: JSON.stringify(chatMessage),
    //   }).then((response) => response.json()) // pull the json out of the response
    //   .then((data) => console.log(data));

    setChatMessages([...chatMessages, { text: message }]);
  }

  function getChats() {
    //         fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/18fa1c30-c741-4fa2-9b02-190f3dfcfccc/messages")
    //   .then((response) => response.json())
    //   .then((data) =>console.log(data))
    // console.log("chats: " + chatMessages);
  }

  return (
    <div id="chatDiv">
      <h1>Chat!</h1>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="chat1">Chat 1</ToggleButton>
        <ToggleButton value="chat2">Chat 2</ToggleButton>
      </ToggleButtonGroup>
      <br />
      <br />
      {/* <div id="chatBody">
                <table>
                    <tr>
                        <td>Here is a chat</td>
                    </tr>
                </table>
            </div> */}
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

      {chatMessages.map((chatMessage) => (
        <ChatItem text={chatMessage.text} />
      ))}
    </div>
  );
};

const ChatItem = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Stack spacing={2} className="grid">
      <Item>{props.text}</Item>
      <br />
    </Stack>
  );
};
