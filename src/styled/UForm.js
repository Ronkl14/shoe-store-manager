import styled from "styled-components";

export const UForm = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;

  input {
    padding: 0.7rem 0;
    margin: 0 1rem;
  }

  label {
    margin: 0 1rem;
  }

  button {
    margin: 1rem auto;
    width: 50%;
    background-color: #277ffe;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    cursor: pointer;
  }
`;
