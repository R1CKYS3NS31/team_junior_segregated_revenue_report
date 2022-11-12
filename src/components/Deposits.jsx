
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total Revenue</Title>
      <Typography component="p" variant="h4">
        KES. 3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 November, 2022
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
      </div>
    </React.Fragment>
  );
}