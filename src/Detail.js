import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Detail = (props) => {
  return (
    <>
      <Container>
        <Title>글제목</Title>
        <Author>글쓴이</Author>
        <Content>글내용</Content>
        <ButtonStyle>
          <p>
            <Button variant="primary">돌아가기</Button>
          </p>
        </ButtonStyle>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Author = styled.h3`
  margin-bottom: 20px;
`;

const Content = styled.div`
  background-color: #d3d3d3;
  height: 10rem;
  padding: 1rem;
  border-radius: 5px;
`;

const ButtonStyle = styled.div`
  margin: 10px auto;
`;

export default Detail;
