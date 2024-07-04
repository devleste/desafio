import { useEffect } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Button, Box } from '@mui/material';

import { useContextModal } from './contexts/context';

import ModalEstructure from './components/ModalEstructure/ModalEstructure';
import ModalAdd from './components/ModalEstructure/ModalAdd/ModalAdd';
import Filters from './components/Filters/Filters';
import TableContact from './components/TableContact/TableContact';
import lesteLogo from './assets/lestetelecom.png';
import ModalStats from './components/ModalEstructure/ModalStats/ModalStats';

function App() {
  const { setModal, setContacts } = useContextModal();

  useEffect(() => {
    const getData = async () => {
      const localStorageData = localStorage.getItem('contacts');

      if (localStorageData) {
        setContacts(JSON.parse(localStorageData));
      } else {
        const response = await fetch(
          'https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060'
        );

        if (response.ok) {
          const data = await response.json();

          localStorage.setItem('contacts', JSON.stringify(data));

          setContacts(data);
        }
      }
    };

    getData();
  }, []);

  return (
    <>
      <Box p='32px'>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <img src={lesteLogo} alt='' width={200} height={100} />
        </Box>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          mb='16px'
        >
          <Button
            variant='contained'
            style={{ marginRight: '16px' }}
            onClick={() =>
              setModal({ isOpen: true, body: <ModalStats />, title: 'Stats' })
            }
          >
            Stats
          </Button>

          <Filters />

          <Button
            variant='contained'
            endIcon={<AddIcon />}
            onClick={() =>
              setModal({ isOpen: true, body: <ModalAdd />, title: 'Add' })
            }
          >
            Add
          </Button>
        </Box>

        <TableContact />

        <ModalEstructure />
      </Box>
    </>
  );
}

export default App;
