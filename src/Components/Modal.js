import React from 'react'
import '../App.css'

export default function Modal (props) {

    function hideModal(e){
        let target = e.target
        if(target.id === 'modal' || target.id === 'cancel')
            props.onHideModal()
        
    }

    return(
        <div id='modal' onClick={hideModal} className={props.show ? 'modal' : 'modal hidden'}>
            <div className='cardModal'>
                {props.children}
            </div>
        </div>
    )
}