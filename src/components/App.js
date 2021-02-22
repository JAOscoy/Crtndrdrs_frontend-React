import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AutoGridLogo from './header';
import NavTabs from './appTool';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    display: 'grid', 
    gridTemplateRows: '1fr auto',
  },
  header: {
    backgroundColor: '#e4e6ebff',
    display: 'grid',
    width: '100mv',
  },
  foot: {
    backgroundColor: '#fed884ff',
    display: 'grid', 
    width: '100mv',
  },
  navbar: {
    backgroundColor: 'white',
    display: 'grid',
    width: '100mv',
  },
  stepper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundColor: 'white',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      gridTemplateRows: '1fr 1fr',
    },
  },
  cathegory: {
    justifySelf: 'center',
    alignSelf: 'center',
    width: '80%',

  },
  zoom: {
    justifySelf: 'center',
    alignSelf: 'center',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: '45px',
  }
}))




/*$space-cadet: #252850ff;
$gainsboro: #e4e6ebff;
$unbleached-silk: #f3d3bdff;
$dark-jungle-green: #26302aff;
$orange-yellow-crayola: #fed884ff;
<Grid item className={classes.foot}>
<FloatingActionButtonZoom />
        </Grid>
          <Grid container className={classes.stepper}>
          <Grid item className={classes.cathegory}>
            <TextMobileStepper />
          </Grid>
          <Grid item className={classes.zoom}>
            <SimplePaper />
          </Grid>
        </Grid>        
*/

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='root'>
        <Grid container className={classes.header}>
          <AutoGridLogo/>
        </Grid>
        <Grid container className={classes.page}>
          <NavTabs />
        </Grid>
    </div>
  );
}

export default App;

