import styled from "styled-components";
import Dashboard from "../Dashboard/Dashboard";
import Contacts from "../../components/Contacts/Contacts";

export default function Homepage(){
    return (
    <Wrapper>
        <Dashboard />
        <Container>
           <Contacts />
        </Container>
    </Wrapper>
    )
}

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 5fr;
`;

const Container = styled.div`
min-height: 100vh;
background-color: #201520;
padding: 30px;
`