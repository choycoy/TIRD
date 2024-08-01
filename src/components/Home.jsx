import React from "react";
import AuthSection from "./AuthSection";
import logo from "../img/logo-white.png";
import Footer from "./Footer";
import { Container, GridContainer, GridItem, Logo, HomeHeading1, Heading4 } from "../style/StyledComponents";

export default function CenteredComponent() {
  return (
    <Container>
      <GridContainer>
        <Logo src={logo} alt="TIRD" />
        <GridItem>
          <HomeHeading1>This time it's really different</HomeHeading1>
          <Heading4>Join today.</Heading4>
          <AuthSection />
        </GridItem>
      </GridContainer>
      <Footer />
    </Container>
  );
}
