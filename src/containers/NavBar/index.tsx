import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../components/Icon";
import { colors } from "../../utils/colors";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 8px;
  width: 60px;
  text-align: center;
  a {
    height: 60px;
    text-decoration: none;
    color: ${colors.gray6};
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s ease;
  }
  a:hover {
    background: ${colors.lightBlue};

  }
  a > div:first-child {
      margin: 0 auto;
  }
  a > div:nth-child(1) {
      margin: 2px auto;
  }

  .nav-active > div:first-child {
      background-color: ${colors.blue} !important;
    }
  .nav-active {
    color: ${colors.blue};
  }
`;

export default () => {
  return (
    <StyledNavbar>
      <NavLink to="/flow" activeClassName="nav-active">
        <Icon glyph='grid' />
        <div>Материалы</div>
      </NavLink>
      <NavLink to="/edit-task-group" activeClassName="nav-active">
        <Icon glyph='flow' />
        <div>Конструктор</div>
      </NavLink>
      <NavLink to="/data" activeClassName="nav-active">
        <Icon glyph='shipment' />
        <div>Релизы</div>
      </NavLink>
      <NavLink to="/data" activeClassName="nav-active">
        <Icon glyph='list' />
        <div>Данные</div>
      </NavLink>
      <NavLink to="/settings" activeClassName="nav-active">
        <Icon glyph='settings' />
        <div>Настройки</div>
      </NavLink>
    </StyledNavbar>
  );
};
