import styled from "styled-components";

const StDetail = styled.div`
    box-sizing: border-box;
    width: 1200px;
    display: flex;
    flex-direction: column;
    background-color: #DEF5E5;
    padding: 30px 40px 100px 40px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: end;
    width: 60%;
    margin-right: 10px;
`

const MoveBtn = styled.button`
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

const DetailTextBox = styled.div`
    box-sizing: border-box;
    width: 60%;
    background-color: white;
    margin-top: 20px;
    border-radius: 20px;
    border: 5px solid #9ED5C5;
    padding: 10px 30px 20px 30px;

`

const ID = styled.p`
`

const Title = styled.h1`
    margin: 30px 0 10px 0;
`

const Content = styled.p`
    font-size: 20px;
    margin-top: 15px;
`

export { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, Title, Content }