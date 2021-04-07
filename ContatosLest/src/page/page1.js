import React from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Add from '../components/Add/Add';
import Contact from '../components/Contact/Contact';

function Page1(){
    return(
        <div>
            <Header/>
            <Search/>
            <Add/>
            <Contact/>
        </div>
    );
}

export default Page1;