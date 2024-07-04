import { DialogContent, Card, Typography, CardContent } from '@mui/material';

import { useEffect, useState } from 'react';

import { useContextModal } from '../../../contexts/context';

const ModalStats = () => {
  const [genderCount, setGenderCount] = useState<Array<number>>([]);
  const { contacts } = useContextModal();

  useEffect(() => {
    const maleCount = contacts.filter(
      (contact) => contact.gender === 'M'
    ).length;
    const femaleCount = contacts.filter(
      (contact) => contact.gender === 'F'
    ).length;

    setGenderCount([maleCount, femaleCount]);
  }, [contacts]);

  return (
    <>
      <DialogContent dividers>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h6' marginBottom='16px'>
              Gender Count
            </Typography>

            <Typography>Male: {genderCount[0]}</Typography>
            <Typography>Female: {genderCount[1]}</Typography>
          </CardContent>
        </Card>
      </DialogContent>
    </>
  );
};

export default ModalStats;
