import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  margin: 20px;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-style: groove;
  border-radius: 20px;
  border-width: 8px;
  border-color: #a38f1d;
  background-color: #0a3057;
`;

export const Tags = styled.div`
  display: flex;
  font-size: 20px;
  font-style: italic;
  display: flex;
  margin: 6px;
  justify-content: space-between 10px;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  height: 100px;
  width: 100px;
  align-items: center;
`;

export const ImgContainer = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Text = styled.div`
  font-style: italic;
  font-size: 22px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 30px;
  font-style: oblique;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 10px;
`;
