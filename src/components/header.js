import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from './resources/logo.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
  },
  logo: {
    justifySelf: 'center',
    alignSelf: 'center',
  },
  logoImg: {
    width: '40%', 
    margin: theme.spacing(1),
  },
  title: {
    color: '#26302aff',
    textAlign: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    margin: theme.spacing(0.2),

  },
  subTitle: {
    color: '#26302aff',
    textAlign: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    margin: theme.spacing(1),
  },
}));

export default function AutoGridLogo() {
    const classes = useStyles();
  
    return (
        <Grid container className={classes.root}>
          <Grid item className={classes.logo}>
            <ButtonBase href='#'>
              <img className={classes.logoImg} alt="logocrtndrdrs" src= {logo}/>
            </ButtonBase>
          </Grid>
          <Grid item className={classes.title}>
              <Typography style={{fontWeight: '900', fontSize:'2rem'}}>Cartones de Hidalgo</Typography>
          </Grid>
          <Grid item className={classes.subTitle}>
              <Typography style={{fontWeight: '500', fontSize:'1rem'}}>Embalaje sustentable a la medida de tu producto</Typography>
          </Grid>
        </Grid>
    );
  }