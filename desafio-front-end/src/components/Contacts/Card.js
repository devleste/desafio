import { styled } from "styled-components";

export default function Card({ contact, key }) {

    function formatDate(date){
        if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            const [year, month, day] = date.split('-');
            const result = `${day}/${month}/${year}`;
            return result;
          } else {
           
            return date;
          }
    }

  return (
    <Wrapper>
      <span>
        <img key={key} src={contact.avatar} />
        <p>
          {contact.first_name} {contact.last_name}
        </p>
        <p>{contact.email}</p>
        <p>{formatDate(contact.birthday)}</p>
        <p>{contact.gender}</p>
        <p>{contact.language}</p>
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  margin-top: 18px;

  span {
    display: grid;
    align-items: center;
    flex-direction: row;
    width: 100%;
    grid-template-columns: 1fr 2fr 3fr 2fr 2fr 2fr;
    padding: 10px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;
