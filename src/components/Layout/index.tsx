import React, { useState } from 'react';

import Header from '../Header';
import Drawer from '../Drawer';
import Routes from '../../routes';
import Footer from '../../components/Footer';
import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <>
      <Grid>
        <Header />
        <Drawer />
        <Routes />
        <Footer />
      </Grid>
    </>
  );
};

export default Layout;