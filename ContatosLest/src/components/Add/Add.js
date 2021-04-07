import React,{ useState } from 'react';
import Add1 from '../Modal/Modal';
import './Add.css';

function Add(){
    const[modal, setModal] = useState(false);

    return(
        <div >

            <div className="addDiv">
                <button className="add" onClick={() => setModal(!modal)}>Adicionar contato</button>
            </div>

            {modal?<Add1/>:null}
        </div>
    );
}

export default Add;
