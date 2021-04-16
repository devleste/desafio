import styled from 'styled-components'

const MenuStyles = styled.div`
position:absolute;
width:100%;
height:100vh;
background-color:rgba(0,0,0,0.4);
.menu {
    z-index:5;
    height:100vh;
    width:25%;
    position:absolute;
    right:0;
    background-color:#fff;

    .menuIcon {
        width:12%;
        margin:0.5rem;
    }

    .func {
        height:80vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        
        label {
            margin: 0 0.3rem 0 0;
        }

        input {
            height:3rem;
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

        .searchContact {
            margin:1rem 0;
        }

        button {
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

        .filterMenu {
            font-family: 'Varela Round', sans-serif;
            color:#00b165; 
            display:flex;
            flex-wrap:wrap;

            div {
                margin:0.5rem 2rem;
            }
            select {
                font-family: 'Varela Round', sans-serif;
                color:#00b165; 
                border-color:#00b165; 
            }
        }

        .addContact {

            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;

            input {
                height:1.5rem;
                margin:0.2rem;
            }

            button {
                height:2rem;
                width:18rem;
                margin-top:1rem;
            }

            .gender, select {
                border-color:#00b165;
                font-family: 'Varela Round', sans-serif;
                color:#00b165; 
            }

            .box {
                width:3rem;
            }

            label {
                font-family: 'Varela Round', sans-serif;
                color:#00b165;
                text-align:center;
                width:10rem;
            }

            .randomAvt {
                width:18rem;
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
    }
}
`

export default MenuStyles;