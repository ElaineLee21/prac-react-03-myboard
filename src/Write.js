import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { createMemo } from "./redux/modules/board";

const Write = ({ history }) => {
  const dispatch = useDispatch();
  const author = React.useRef();
  const title = React.useRef();
  const content = React.useRef();

  const addMemo = () => {
    let memo = {
      author: author.current.value,
      title: title.current.value,
      content: content.current.value,
    };
    dispatch(createMemo(memo));
    history.push("/");
    console.log(memo);
  };

  return (
    <>
      <Container>
        <Input type="text" placeholder="제목을 입력하세요" ref={title}></Input>
        <Input
          type="text"
          placeholder="글쓴이를 입력하세요"
          ref={author}
        ></Input>
        <Textarea placeholder="내용을 입력하세요" ref={content}></Textarea>
        <ButtonStyle>
          <p>
            <Button variant="primary" onClick={addMemo}>
              메모하기
            </Button>
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

const Input = styled.input`
  width: 30rem;
  display: flex;
  padding: 10px;
  margin: 10px auto;
`;

const Textarea = styled.textarea`
  width: 30rem;
  height: 10rem;
  padding: 10px;
  margin: 10px auto;
`;

const ButtonStyle = styled.div`
  margin: 10px auto;
`;

export default Write;
