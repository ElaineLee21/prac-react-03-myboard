import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateMemoFB } from "./redux/modules/board";

const Edit = (props) => {
  const dispatch = useDispatch();
  const author = React.useRef();
  const title = React.useRef();
  const content = React.useRef();
  const idx = parseInt(props.match.params.idx);

  const editMemo = () => {
    let memo = {
      author: author.current.value,
      title: title.current.value,
      content: content.current.value,
    };
    dispatch(updateMemoFB(memo, idx));
    props.history.push("/");
  };

  return (
    <>
      <Container>
        <h1>메모 수정하기</h1>
        <Input type="text" placeholder="제목을 입력하세요" ref={title}></Input>
        <Input
          type="text"
          placeholder="글쓴이를 입력하세요"
          ref={author}
        ></Input>
        <Textarea placeholder="내용을 입력하세요" ref={content}></Textarea>
        <ButtonStyle>
          <p>
            <Button variant="primary" onClick={editMemo}>
              수정완료
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

export default Edit;
