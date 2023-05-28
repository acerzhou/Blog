import styled from "styled-components";

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 1rem;
`;
export default function Link({ text, link }) {
  return <StyledLink href={link}>{text}</StyledLink>;
}
