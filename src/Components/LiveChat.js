import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";

import { MessageGenerator, Namegenerate } from "../utils/NameContainer";
import { addMessage, liveMessage } from "../utils/ChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [newMessage, setnewMessage] = useState("");
  const chatM = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: Namegenerate(),
          message: MessageGenerator(20) + "🎶",
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="p-2 ml-2 w-full h-[653px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatM.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
          <form
            className="w-full p-2 ml-2 border border-black rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="w-96 px-2"
              type="text"
              value={newMessage}
              onChange={(e) => {
                setnewMessage(e.target.value);
              }}
            />
            <button
              className=" bg-green-300"
              onClick={() => {
                dispatch(
                  liveMessage({
                    name: "Ayaan",
                    message: newMessage,
                  })
                );
                setnewMessage("");
              }}
            >
              {" "}
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
