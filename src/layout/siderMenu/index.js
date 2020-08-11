import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";

const Users = ({ userName }) => {
  return (
    <Row align="middle" className="font-cl-6 my-3" gutter={[25, 0]}>
      <Col span={6}>
        <div
          className="bg-cl-1 message__avatar"
          // style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        >
          <UserOutlined></UserOutlined>
        </div>
      </Col>
      <Col span={18}>
        <span style={{ fontWeight: "bold" }}>{userName}</span>
      </Col>
    </Row>
  );
};

function Index(props) {
  return (
    <Menu {...props} className="menu">
      <div className="menu__header">
        <Row align="middle" className="h-100 px-4">
          <div
            className="menu__closeLogo"
            onClick={() => {
              props.closeClick();
            }}
          >
            <CloseIcon></CloseIcon>
          </div>
          <div className="ml-auto">USERS</div>
        </Row>
      </div>
      <div className="menu__content">
        <Row className="flex-column py-5 pr-2 pl-4">
          <Users userName="Zia Khorsandi"></Users>
          <Users userName="Monire Moayedi"></Users>
        </Row>
      </div>
    </Menu>
  );
}

export default Index;
