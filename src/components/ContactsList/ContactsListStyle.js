import styled from 'styled-components'

const ContactListStyle = styled.div`
width:100%;
height:80vh;
overflow:scroll;
display:flex;
flex-direction:column;
border: 2px 2px 2px 2px;
box-shadow: 2px 2px #00c36f;

.filterMenu {
margin: 2rem 0 1rem 0;
align-items:center;
justify-items:center;
display:grid;
grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
font-family: 'Lobster', cursive;
font-family: 'Varela Round', sans-serif;
font-weight:900;
font-size:1.1rem;
color:#009282;  
}

.contactList {
display:grid;
grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
align-items:center;
justify-items:center;
background-color:#fff;
font-family: 'Lobster', cursive;
font-family: 'Raleway', sans-serif;
color:#009282;
font-size:1rem;
font-weight:600;
margin:2px 0;
box-shadow: 2px 2px rgba(0,0,0,0.12);

img {
    margin:0.2rem;
    width:40%;
    border-radius:50%;
}

.buttons {
    display:flex;
    justify-content:center;
    align-items:center;

    button {
        border:none;
        background:none;
        margin: 0.3rem;
        width:2rem;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    }

 img {
    width:1.4rem;
}
}
}
`
export default ContactListStyle;