import { useLocation } from "react-router-dom";
import { NavList, StyledLink, NavContainer, NavLogo } from "../style/StyledComponents";
import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";
import LogOutBtn from "./LogOutBtn";
export default function Nav() {
  const location = useLocation();
  return (
    <NavContainer>
      <Link to="/dashboard">
        <NavLogo src={logo} alt="TIRD" width="130px" height="130px" />
      </Link>
      <NavList>
        <li>
          <StyledLink to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            Explore
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chat-left"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>
            Messages
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/myaccount" className={location.pathname === "/myaccount" ? "active" : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            My account
          </StyledLink>
        </li>
      </NavList>
      <LogOutBtn />
    </NavContainer>
  );
}
