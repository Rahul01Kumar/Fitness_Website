import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./reusable/Button";
import Logo from "./reusable/Logo";

const menusData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Schedule", path: "/schedule" },
  { id: 5, name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <Box>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Menus>
          {menusData.map((menu) => (
            <Link key={menu.id} to={menu.path} style={{ textDecoration: "none" }}>
              <Menu>{menu.name}</Menu>
            </Link>
          ))}
        </Menus>
        <Link to="/BecomeMember">
          <Button>Became a member</Button>
        </Link>
      </Right>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Menus = styled.div``;
const Menu = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  text-transform: capitalize;
  margin-right: 30px;
  font-size: 16px;
  cursor: pointer;
`;
