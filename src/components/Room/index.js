import React, { useState } from "react";
import Menu from "../../layout/siderMenu/index";
import Message from "../../layout/Message/index";
import { Row } from "antd";
import { WechatOutlined } from "@ant-design/icons";

import { ReactComponent as SendLogo } from "../../assets/images/send.svg";
import { ReactComponent as MenuLogo } from "../../assets/images/menu.svg";

const Header = ({ onMenuClick }) => {
  return (
    <div className="header">
      <div className="header__container">
        <Row align="middle" className="h-100 px-5">
          <div className="header__avatar mr-3">
            <WechatOutlined />
          </div>
          <div className="header__txt">Room Name</div>
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
const Footer = () => {
  return (
    <div className="footer">
      <Row className="footer__container" justify="center" align="middle">
        <div className="footer__btn">
          <SendLogo></SendLogo>
        </div>
        <input type="text" placeholder="Message..." />
      </Row>
    </div>
  );
};

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openClose = () => {
    setIsOpen(!isOpen);
  };
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
        />
        <main id="page-wrap">
          <Header onMenuClick={openClose}></Header>
          <div className="room__context px-3 px-sm-5">
            <Message
              txt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
              userName="Zia Khorsandi"
              time="9:05"
              isOthers={false}
            ></Message>
            <Message
              txt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. یک نمونه است"
              // txt="this is a test"
              userName="Zia Khorsandi"
              time="9:05"
              isOthers={true}
            ></Message>
            <Message
              txt="دنیای موجود طراحی"
              userName="Zia Khorsandi"
              time="9:05"
              isOthers={false}
            ></Message>
            <Message
              txt="دستاوردهای اصلی، و جوابگوی سوالات"
              userName="Zia Khorsandi"
              time="9:05"
              isOthers={true}
            ></Message>
            <Message
              txt="حروفچینی دستاوردهای اصلی،"
              userName="Zia Khorsandi"
              time="9:05"
              isOthers={true}
            ></Message>
            <Message
              txt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
              userName="Zia Khorsandi"
              time="9:05"
              isOthers={false}
            ></Message>
            <Message
              txt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. یک نمونه است"
              // txt="this is a test"
              userName="Zia Khorsandi"
              time="9:05"
              isOthers={true}
            ></Message>
          </div>
          <Footer></Footer>
        </main>
      </div>
    </>
  );
};

export default Index;
