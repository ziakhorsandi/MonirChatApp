import React from "react";
import { Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

function index({ txt, avatar, userName, time, isOthers }) {
  if (!isOthers) {
    return (
      <Row className="message flex-column" justify="center" align="bottom">
        <div className="message__txt-me main-font mb-3">{txt}</div>
        <div className="main-font font-cl-5">
          <span>{time}</span>
        </div>
      </Row>
    );
  }
  return (
    <Row className="message" gutter={[5, 10]}>
      <Col span={24}>
        <Row align="bottom">
          <div className="message__avatar mr-2">
            <UserOutlined></UserOutlined>
          </div>
          <div className="message__txt-other main-font">{txt}</div>
        </Row>
      </Col>
      <Col span={24}>
        <Row className="font-cl-5">
          <div className="message__space mr-2"></div>
          <div className="main-font">
            <span className="mr-3">{userName}</span>
            <span>{time}</span>
          </div>
        </Row>
      </Col>
    </Row>
  );
}

export default index;
