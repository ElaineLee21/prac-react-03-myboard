import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

const List = (props) => {
  const board = useSelector((state) => state.board);
  console.log(board);

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
          <tbody>
            {board.map((memo, idx) => {
              return (
                <tr
                  key={idx}
                  onClick={() => {
                    props.history.push("/detail");
                  }}
                >
                  <td>{idx}</td>
                  <td>{memo.author}</td>
                  <td>{memo.title}</td>
                </tr>
              );
            })}

            <tr
              onClick={() => {
                props.history.push("/detail");
              }}
            >
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr
              onClick={() => {
                props.history.push("/detail");
              }}
            >
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
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
