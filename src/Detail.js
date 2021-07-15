import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemoFB } from "./redux/modules/board";

const Detail = (props) => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board.board);
  const idx = parseInt(props.match.params.idx);

  const onDeleteClick = () => {
    const deleteConfirm = window.confirm("메모를 삭제하시겠습니까?");
    if (deleteConfirm) {
      //delete
      dispatch(deleteMemoFB(idx));
      props.history.goBack();
    }
  };

  return (
    <>
      <Container>
        <Title>{board[idx].title}</Title>
        <Author>{board[idx].author}</Author>
        <Content>{board[idx].content}</Content>

        <ButtonStyle>
          <Button
            margin="20px"
            variant="primary"
            onClick={() => {
              props.history.push("/detail/" + idx + "/edit");
            }}
          >
            수정하기
          </Button>
          <Button variant="primary" onClick={onDeleteClick}>
            삭제하기
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.history.goBack();
            }}
          >
            돌아가기
          </Button>
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
  display: flex;
`;

export default Detail;
