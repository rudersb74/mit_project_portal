import React, { useContext, useState } from "react";
import Logo from "./Logo";
import StaffNavLinks from "./StaffNavLinks";
import StudentNavLinks from "./StudentNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import styled from "styled-components";
import { USERTYPES } from "../../utils/APP_CONSTANTS";
import { NotificationProvider } from "../../contexts/NotificationContext";
import { UserContext } from "../../contexts/UserContext";

const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  background-color: #fff;
`;

const Header = (/*{ userType, userName }*/) => {
  const [user] = useContext(UserContext);
  const userType = user.role;
  return (
    <HeaderContainer>
      <Logo />
      {userType === USERTYPES.STAFF && <StaffNavLinks />}
      {userType === USERTYPES.STUDENT && <StudentNavLinks />}
      <NotificationProvider>
        <HeaderAvatar />
      </NotificationProvider>
    </HeaderContainer>
  );
};

export default Header;
