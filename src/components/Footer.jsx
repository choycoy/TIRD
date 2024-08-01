import { FooterContainer, FooterList, FooterItem, FooterLink } from "../style/StyledComponents";

const footerLinks = [
  { text: "About", url: "/about" },
  { text: "Help Center", url: "/help-center" },
  { text: "Terms of Service", url: "/terms-of-service" },
  { text: "Privacy Policy", url: "/privacy-policy" },
  { text: "Cookie Policy", url: "/cookie-policy" },
  { text: "Accessibility", url: "/accessibility" },
];

export default function Footer() {
  return (
    <FooterContainer>
      <FooterList>
        {footerLinks.map((link, index) => (
          <FooterItem key={index}>
            <FooterLink href={link.url}>{link.text}</FooterLink>
          </FooterItem>
        ))}
        <FooterItem>© 2024 TIRD</FooterItem>
      </FooterList>
    </FooterContainer>
  );
}
