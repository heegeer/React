import styled from "styled-components";

const List = styled.div`
    box-sizing: border-box;
    width: 1200px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }

    @media only screen and (max-width: 750px) {
        padding: 0;

        h2 {
            display: flex;
            justify-content: center;
        }
    }
`

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media only screen and (max-width: 1200px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media only screen and (max-width: 750px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`

const ListCard = styled.div`
    border: 5px solid #9ED5C5;
    border-radius: 20px;
    padding: 13px 20px 30px 20px;
    height: 210px;
    width: 300px;
    margin-right: 20px;
    margin-bottom: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Detail = styled.div`
    color: gray;
    text-decoration: underline;
    text-decoration-color: gray;
    text-underline-position: under;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    :hover {
        color: #8EC3B0;
        text-decoration: underline;
        text-decoration-color: #8EC3B0;
    }
`

const ListText = styled.div`
    text-align: center;
`

const TodoTitle = styled.h2`   
    text-overflow: ellipsis;
    overflow: hidden;
    width: 250px;
    white-space: nowrap;
    margin: 10px 0;
    justify-content: center;
    text-align: center;
`

const TodoContent = styled.p`
    text-overflow: ellipsis;
    overflow: hidden;
    width: 250px;
    white-space: nowrap;
    margin: 10px 0 20px 0;
    justify-content: center;
    text-align: center;
`

const TodoBtns = styled.div`
    display: flex;
    justify-content: center;
`

const Btn = styled.button`
    margin-right: 12px;
    height: 35px;
    width: 100px;
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

export { List, ListContainer, ListCard, Detail, ListText, TodoTitle, TodoContent, TodoBtns, Btn }