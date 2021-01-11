import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import regulares from './resources/regulares.jpeg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundColor: 'white',
    borderRadius: '45px',

  },
  title: {
    backgroundColor: 'transparent',
    height: 'auto',
    boxShadow: 'none',
    display: 'grid',
  },
  img: {
    height: 'auto',
    width: '90%',
    overflow: 'hidden',
    display: 'block',
    justifySelf: 'center',
  },
  actions: {
    justifySelf: 'center',
    height: 'auto',
    margin: theme.spacing(3),
  },
  description: {
    backgroundColor: 'transparent',
    height: 'auto',
    boxShadow: 'none',
    display: 'grid',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  textTitle: {
    fontSize:'2rem',
    textAlign: 'left', 
    fontWeight: '900',
    margin: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize:'1rem'
    }},
  textBody: {
    fontSize:'1rem',
    textAlign: 'left', 
    fontWeight: '900',
    margin: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize:'0.5rem'
    },  
  }
}));

const introduction = 'Con más de 20 años de experiencia en el ramo,'
+ 'ofrecemos un nuevo concepto de ventas de cajas corrugados a pequeños'
+ 'negocios con necesidades muy especificas y cantidades pequeñas.'

export default function MainStart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={regulares}
        alt='Caja'
      />
      <Paper className={classes.title}>
        <Grid container wrap="nowrap" spacing={2} style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
            <Grid item xs>
              <Typography className={classes.textTitle}>Soluciones flexibles en corrugado para pequeños negocios</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.textBody}>{introduction}</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.textBody}>Nuestros servicios y productos son:</Typography>
              <ul>
                <li>Venta de cajas de corrugado</li>
                <li>Especificaciones flexibles</li>
                <li>Asesoria en diseño de caja</li>
                <li>Entrega en el area metropolitana</li>
              </ul>
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
