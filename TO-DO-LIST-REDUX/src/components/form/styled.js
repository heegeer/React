import styled from "styled-components";

const StForm = styled.form`
  width: 1200px;
  height: 90px;
  padding: 20px 50px;
  box-sizing: border-box;
  background-color: #DEF5E5;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 18px;
    width: 40px;
  }

  input {
    height: 27px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid #B2B2B2;
    padding: 5px 10px;
    margin-right: 25px;
  }

  input:focus {
    outline: none;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;

    span {
      width: 65px;
    }
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;

    input {
      width: 72%;
    }
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    height: 290px;
    display: flex;
    flex-wrap: wrap;

    span {
      width: 40px;
    }

    input {
      width: 80%;
    }
  }

`

const PlusBtn = styled.button`
  height: 35px;
  width: 120px;
  border-radius: 20px;
  border: transparent;
  background-color: #8EC3B0;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  :hover {
        opacity: 0.8;
  }
`

export { StForm, PlusBtn }