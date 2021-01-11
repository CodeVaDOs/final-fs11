import React from "react";
import styled from 'styled-components';
import avatar from '../../images/avatar.png';
import flag from '../../images/flag.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #eef5ff;
  max-width: 415px;
  width: 415px;
  height: 68px;
  padding: 30px;
`;

const SettingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #6E7375;
`;

const Switcher = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Flag = styled.img`
  border-radius: 50%;
  width: 19px;
  height: 19px;
`;

const LangSelect = styled.p`
  font-size: 12px;
  margin-left: 7px;
  color: #6E7375;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const UserCredit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 10px;
`;

const UserName = styled.h2`
  font-size: 14px;
  color: #254A93;
  white-space: pre;
  text-align: right;
`;

const UserRole = styled.p`
  color: #99A0A3;
  font-size: 11px;
`;

const UserAvatar = styled.img`
  width: 68px;
  height: 68px;
  box-sizing: border-box;
  border-radius: 50%;
  object-fit: cover;
`;

/**
 *
 * @param props {language, name, role, flag, avatar}
 * @returns {*}
 * @constructor
 */

const SidebarMenuItem = (props) => {
  const { language, name, role, flagLink, avatarLink } = props;

  return (
    <Container>
      <SettingsContainer>
        <Switcher>
          <Flag src={flag} alt="country flag"/>
          <LangSelect>{language || "UA"}</LangSelect>
        </Switcher>
        <MailOutlineIcon color="inherit" style={{ marginLeft: "1rem" }}/>
        <NotificationsIcon color="inherit" style={{ marginLeft: "1rem" }}/>
      </SettingsContainer>
      <UserContainer>
        <UserCredit>
          <UserName>{name || "First LastName"}</UserName>
          <UserRole>{role || "Role"}</UserRole>
        </UserCredit>
        <UserAvatar src={avatar} alt="user avatar"/>
      </UserContainer>

    </Container>
  );
};

export default SidebarMenuItem;