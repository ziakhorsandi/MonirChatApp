import React, { useState, useEffect, useRef } from "react";
import Menu from "../../layout/siderMenu/index";
import Message from "../../layout/Message/index";
import { Row } from "antd";
import { WechatOutlined } from "@ant-design/icons";
import { useParams, useLocation } from "react-router-dom";

import soketIoClient from "socket.io-client";

import { ReactComponent as SendLogo } from "../../assets/images/send.svg";
import { ReactComponent as MenuLogo } from "../../assets/images/menu.svg";

const ENDPOINT = "http://localhost:5000";
// const ENDPOINT = "http://zikdemo.ir";

const Header = ({ onMenuClick, title }) => {
  return (
    <div className="header">
      <div className="header__container">
        <Row align="middle" className="h-100 px-5">
          <div className="header__avatar mr-3">
            <WechatOutlined />
          </div>
          <div className="header__txt">{title} Room</div>
          <div
            className="header__logo ml-auto"
            onClick={() => {
              onMenuClick();
            }}
          >
            <MenuLogo></MenuLogo>
          </div>
        </Row>
        <div className="header__line"></div>
      </div>
    </div>
  );
};
const Footer = ({ submit }) => {
  const [inputVal, setInputVal] = useState("");
  const send = () => {
    let val = inputVal.trim();
    if (val) {
      submit(val);
      setInputVal("");
    }
  };
  return (
    <div className="footer">
      <Row className="footer__container" justify="center" align="middle">
        <div
          className="footer__btn"
          onClick={() => {
            send();
          }}
        >
          <SendLogo></SendLogo>
        </div>
        <input
          value={inputVal}
          type="text"
          placeholder="Message..."
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              send();
            }
          }}
        />
      </Row>
    </div>
  );
};

const Index = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [txtArr, setTxtArr] = useState([]);
  const [roomUsers, setRoomUsers] = useState([]);
  const [myId, setMyId] = useState("");
  const socketRef = useRef(null);

  const queryString = new URLSearchParams(props.history.location.search);

  useEffect(() => {
    const socket = soketIoClient(ENDPOINT, { path: "/app" });
    socketRef.current = socket;

    //JOIN CHATROOM
    socket.emit("joinRoom", {
      userName: queryString.get("user"),
      room: queryString.get("room"),
    });
    socket.on("giveMeid", (msg) => {
      setMyId(msg.id);
    });
    socket.on("message", (message) => {
      setTxtArr((txtArr) => [
        ...txtArr,
        {
          id: message.id,
          txt: message.text,
          time: message.time,
          user: message.userName,
        },
      ]);
      //SCROLL TO END OF THER PAGE
      window.scrollTo(0, document.body.scrollHeight);
    });

    socket.on("roomUsers", ({ room, users }) => {
      console.log("room", room);
      console.log("users", users);
      setRoomUsers(users);
    });

    return () => socket.disconnect();
  }, []);
  //_________________________________________________________
  const openClose = () => {
    setIsOpen(!isOpen);
  };
  const submitText = (val) => {
    socketRef.current.emit("chatMessage", val);
  };
  //_________________________________________________________
  return (
    <>
      <div id="outer-container" className="room">
        <Menu
          width={"211px"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
          customCrossIcon={false}
          customBurgerIcon={false}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          closeClick={openClose}
          users={roomUsers}
        />
        <main id="page-wrap">
          <Header
            onMenuClick={openClose}
            title={queryString.get("room")}
          ></Header>
          <div className="room__context px-3 px-sm-5">
            {txtArr.map((elem) => {
              // console.log("!(elem.id === myId)", !(elem.id === myId));
              // console.log("myId", myId);
              // console.log("elem.id", elem.id);

              return (
                <Message
                  txt={elem.txt}
                  userName={elem.user}
                  time={elem.time}
                  isOthers={!(elem.id === myId)}
                ></Message>
              );
            })}
          </div>
          <Footer submit={submitText}></Footer>
        </main>
      </div>
    </>
  );
};

export default Index;
