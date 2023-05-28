import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PageContainer = styled.div`
  padding: 1rem;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export default function Post() {
  const [post, setPost] = useState("");
  const params = useParams();

  useEffect(() => {
    import(`../markdown/${params.slug}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <PageContainer>
      <ContentContainer>
        <ReactMarkdown>{post}</ReactMarkdown>
      </ContentContainer>
    </PageContainer>
  );
}
