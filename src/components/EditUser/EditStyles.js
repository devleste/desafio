import styled from 'styled-components'

const EditStyles = styled.div`
position:absolute;
top:0;
background-color:rgba(0,0,0,0.05);
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

div {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    width:30%;
    height:70vh;
    background-color:#fff;
    border-radius:2rem;
    box-shadow: 3px 3px rgba(0,0,0,0.01);

    input {
            height:2rem;
            width:18rem;
            border-radius:1rem;
            border:none;
            background-color:rgba(0,0,0,0.03);
            text-align:center;
            font-size:1rem;
            color:#00b165;

            ::placeholder {
                font-family: 'Varela Round', sans-serif;
                font-size:1rem;
                text-align:center;
                color:#00b165;
            }
        }
        

    select {
        border-color:#00b165;
        font-family: 'Varela Round', sans-serif;
        color:#00b165; 
    }

    .gender {
        height:10vh;
        width:40%;
        display:flex;
        flex-direction:row;
    }

    label {
        font-family: 'Varela Round', sans-serif;
        color:#00b165;
        text-align:center;
        width:10rem;
        font-weight:200;
    }

    .closeContainer {
        display:grid;
        justify-items:right;
        grid-template-columns:1fr;
        grid-template-columns:1fr;
        height:2rem;
        width:100%;
    }

    .close {
        padding:0;
        margin: 0 1rem 0 0;
        width:2rem;
        cursor:pointer;
        font-size:1px;
        background:none;
        border:none;

        img {
            margin:0;
            width:2rem;
        }
    }

    .updateContact {
            font-family: 'Varela Round', sans-serif;
            height:3rem;
            width:15rem;
            border-radius:1rem;
            border:none;
            background-color:#00b165;
            color:#fff;
            :hover {
                background-color:#004c41;
            }
        }
}
`

export default EditStyles;