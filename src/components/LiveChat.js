import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  //subscribing the store
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeIntervel = setInterval(() => {
      //Api polling here
      console.log("polling here");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(20) + " .....",
        })
      );
    }, 2500);

    // cleaning up the garbage
    return () => clearInterval(timeIntervel);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Udaya Pujari",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-2 border border-black"
          placeholder="Comment here .........."
          type="text"
          value={liveMessage}
          onChange={(e) => {    
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-3 bg-green-300 border rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
