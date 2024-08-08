import React from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogOutSection = styled.button`
  cursor: pointer;
  margin-left: 32px;
  margin-top: 24px;
  font-family: Roboto;
  color: white;
  background-color: #0096ff;
  border-color: transparent;
  border-radius: 4px;
  padding: 6px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #007acc;
    transform: scale(1.05);
  }
`;
export default function LogOutBtn() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return <>{user && <LogOutSection onClick={handleLogout}>Log Out</LogOutSection>}</>;
}
