import React, { useEffect } from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { loadBoardFB } from "./redux/modules/board";

const List = (props) => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board.board);

  useEffect(() => {
    dispatch(loadBoardFB());
  }, [dispatch]);

  return (
    <>
      <JumbotronContainer>
        <Jumbotron>
          <h1>My Board</h1>
          <p>나만의 메모를 작성해보자!</p>
          <p>
            <Button
              variant="primary"
              onClick={() => {
                props.history.push("/write");
              }}
            >
              메모하기
            </Button>
          </p>
        </Jumbotron>
      </JumbotronContainer>

      <TableContainer>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th width="70px">글번호</th>
              <th width="140px">글쓴이</th>
              <th>글제목</th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer" }}>
            {board.map((memo, idx) => {
              return (
                <tr
                  key={board.length - idx}
                  onClick={() => {
                    props.history.push("/detail/" + idx);
                  }}
                >
                  <td>{board.length - idx}</td>
                  <td>{memo.author}</td>
                  <td>{memo.title}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

const JumbotronContainer = styled.div`
  width: 60rem;
  height: 13rem;
  background-color: #e9ecef;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
`;

const TableContainer = styled.div`
  width: 60rem;
  display: flex;
  margin: auto;
`;

export default List;
