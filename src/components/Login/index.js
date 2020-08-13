import React, { useState } from "react";
import {
  Card,
  Select,
  Row,
  Col,
  Avatar,
  Input,
  Button,
  Divider,
  message,
} from "antd";
import { UserOutlined, WechatOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Option } = Select;

function Index(props) {
  const handleChange = (e) => {
    console.log("e", e);
  };
  const [userInput, setUserInput] = useState("");
  const [roomInput, setRoomInput] = useState("");
  const history = useHistory();

  return (
    <Row align="middle" className="login m-auto">
      <Col span={24}>
        <Card title="MonZi ChatApp">
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Row>
                <Col span={6}>
                  <Avatar className="login__avatar" icon={<UserOutlined />} />
                </Col>
                <Col span={18}>
                  <Input
                    placeholder="User Name ..."
                    className="w-100"
                    value={userInput}
                    onChange={(e) => {
                      setUserInput(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={6}>
                  <Avatar className="login__avatar" icon={<WechatOutlined />} />
                </Col>
                <Col span={18}>
                  <Input
                    placeholder="Room Name ..."
                    className="w-100"
                    value={roomInput}
                    onChange={(e) => {
                      setRoomInput(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Divider />
            <Col span={12} offset={11}>
              <Button
                type="primary"
                className="m-auto"
                style={{ color: "#000" }}
                onClick={() => {
                  let user = userInput.trim();
                  let room = roomInput.trim();
                  if (!user) {
                    message.error("User name is not valid");
                    setUserInput("");
                    return;
                  }
                  if (!room) {
                    message.error("Room name in not valid");
                    setRoomInput("");
                    return;
                  }
                  history.push(`/room?user=${user}&room=${room}`);
                }}
              >
                Go to ChatRoom
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Index;
