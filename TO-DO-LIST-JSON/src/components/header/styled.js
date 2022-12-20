import styled from "styled-components";

const StHeader = styled.div`
  width: 1200px;
  height: 70px;
  box-sizing: border-box;
  background-color: #8EC3B0;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  span {
    font-size: 22px;
    font-weight: bold;
  }

  a {
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

export { StHeader }