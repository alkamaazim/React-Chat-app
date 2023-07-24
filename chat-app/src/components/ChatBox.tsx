import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

type Props = {};

const ChatBox = (props: Props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: any[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setMessages(messages)
    });
    return(()=>{
      unsubscribe;
    })
  }, []);

  return (
    <React.Fragment>
      <div className="pb-44 pt-20 containerWrap">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ChatBox;
