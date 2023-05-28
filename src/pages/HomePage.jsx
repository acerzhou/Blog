import Link from "../components/Link";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export default function HomePage({ links }) {
  return (
    <PageContainer>
      <ContentContainer>
        {links.map((l, i) => {
          return <Link key={i} text={l.title} link={l.slug} />;
        })}
      </ContentContainer>
    </PageContainer>
  );
}
