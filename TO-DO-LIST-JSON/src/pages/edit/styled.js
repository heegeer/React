import styled from "styled-components";

const StDetail = styled.div`
    box-sizing: border-box;
    width: 1200px;
    display: flex;
    flex-direction: column;
    /* background-color: #DEF5E5; */
    padding: 30px 40px 75px 40px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 680px) {
        width: 100%;
    }
`

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: end;
    width: 55%;
    margin-right: 10px;

    @media only screen and (max-width: 680px) {
        width: 99%;
    }
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
    width: 55%;
    background-color: white;
    margin-top: 20px;
    border-radius: 20px;
    border: 5px solid #9ED5C5;
    padding: 15px 30px 25px 30px;

    @media only screen and (max-width: 680px) {
        width: 99%;
    }
`

const ID = styled.p`
    margin: 0;
`

const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid #B2B2B2;
    border-radius: 5px;
    padding: 15px 20px;
    margin-bottom: 20px;
`

const TitleInput = styled.input`
    border: transparent;
    padding: 12px 5px;
    font-size: 2em;
    font-weight: bold;
    white-space: normal;
    border-bottom: 1px solid #B2B2B2;

    :focus {
        outline: none;
    }
`

const ContentInput = styled.input`
    border: transparent;
    padding: 12px 5px;
    font-size: 20px;
    line-height: 1.38; 
    white-space: normal;

    :focus {
        outline: none;
    }
`

const Btn = styled.button`
    margin-right: 12px;
    height: 35px;
    width: 120px;
    border-radius: 20px;
    border: transparent;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};

    :hover {
        opacity: 0.8;
    }
`

export { StDetail, DetailBox, BtnBox, MoveBtn, DetailTextBox, ID, EditForm, TitleInput, ContentInput, Btn }