import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

type Props = {};

const ChatBox = (props: Props) => {
  const messageEndRef: React.RefObject<any> = useRef();
  const [messages, setMessages] = useState<any>([]);

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArr: any = [];
      querySnapshot.forEach((doc) => {
        messagesArr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setMessages(messagesArr);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  useEffect(()=>{
    scrollToBottom();
  }, [messages])

  return (
    <React.Fragment>
      <div className="pb-44 pt-20 containerWrap">
        {messages.map((message: any) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messageEndRef}></div>
      </div>
    </React.Fragment>
  );
};

export default ChatBox;
