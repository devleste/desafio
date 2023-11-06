import React from 'react';

const headerStyle = {
  display:'flex',
  backgroundColor:'white',
  color: '##00997B',
  justifyContent:'center',
  textAlign: 'center',
  padding: '10px 0',
};



const Header = () => {
  return (
    <header style={headerStyle}>
      <img  src="https://static.wixstatic.com/media/1f0d31_6973563a5a4a44a3b87e02b5e42b7bd3~mv2.png/v1/fill/w_136,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1f0d31_6973563a5a4a44a3b87e02b5e42b7bd3~mv2.png" alt="" />
    </header>
  );
};

export default Header;
