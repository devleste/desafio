import styled from 'styled-components';

function TableRow(drops) {
    const contact = (drops.contact ? drops.contact : {})

    const Row = styled.tr`
        {
            transition: all 0.3s ease;
            cursor: pointer;
        }
        &:hover {
            -webkit-transform: translateY(-4px);
            -ms-transform: translateY(-4px);
            transform: translateY(-4px);
        }
    `;

    /* A linha que será usada para adicionar novo contato */
    const RowPlus = { backgroundColor: 'rgb(223, 255, 255)' } ;

    function getAge(date) {
        if (!date) {
            return 0;
        }
        let today = new Date();
        let byear = date.split('-')[0];
        let bmonth = date.split('-')[1];
        let bday = date.split('-')[2];
        let age = (today.getFullYear() - byear + ((today.getMonth > bmonth && today.getDay > bday) ? 1 : 0));
        return age;
    }

    return (
        <Row style={(!contact.id ? RowPlus : {})} id={'contacts-'+ (contact.id?contact.id:'plus')}>
            <td>
                <input className={'name'} placeholder={'Nome do contato'} type={'text'} defaultValue={(contact ? contact.first_name : '')}/>
            </td> 
            <td>
                <input className={'lastname'} placeholder={'Sobrenome do contato'} type={'text'} defaultValue={(contact ? contact.last_name : '')}/>
            </td> 
            <td>
                <input className={'contact'} placeholder={'Email de contato'} type={'text'} defaultValue={(contact ? contact.email : '')}/>
            </td> 
            <td>
                <select className={'gender'} defaultValue={contact.gender}>
                    <option value={'M'}>Masculino</option>
                    <option value={'F'}>Feminino</option>
                </select>
            </td>
            <td>
                <input className={'language'} placeholder={'Idioma do contato'} type={'text'} defaultValue={contact.language} />
            </td>
            <td style={{textAlign: 'center'}}>
                <p>{contact.birthday ? getAge(contact.birthday) : 0}</p>
            </td>
            <td>
                <input className={'birthday'} type={'date'} defaultValue={(contact ? contact.birthday : '')}/>
            </td>
            <td style={{textAlign: 'center'}} className={"buttons"}>
                {drops.children}
            </td>
        </Row>
    )
};

export default TableRow;