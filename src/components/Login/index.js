import React from "react";
import { Card, Select, Row, Col, Avatar, Input, Button, Divider } from "antd";
import { UserOutlined, WechatOutlined } from "@ant-design/icons";

const { Option } = Select;

function index(props) {
  const handleChange = () => {};
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
                  <Input placeholder="User Name ..." className="w-100" />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={6}>
                  <Avatar className="login__avatar" icon={<WechatOutlined />} />
                </Col>
                <Col span={18}>
                  <Select
                    defaultValue="PHP"
                    onChange={handleChange}
                    className="w-100"
                  >
                    <Option key={1}>PHP</Option>
                    <Option key={2}>JavaScript</Option>
                    <Option key={3}>NodeJs</Option>
                  </Select>
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
                  props.history.push("/room");
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

export default index;
