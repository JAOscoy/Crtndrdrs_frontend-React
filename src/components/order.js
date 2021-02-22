import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
  form: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
  },
}));

export default function Order() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.form}>
        <Typography variant='h2'>!Crea tu orden!</Typography>
        <TextField
          id="standard-select-option"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Elige el tipo de solicitud"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
