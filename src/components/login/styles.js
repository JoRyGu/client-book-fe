import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    minHeight: 200,
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      width: 355
    },
    [theme.breakpoints.up('md')]: {
      width: 450
    },
    [theme.breakpoints.up('lg')]: {
      width: 500
    }
  },
  signInForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInContainer: {
    width: '100%'
  },
  signInHeader: {
    margin: theme.spacing(0.2)
  },
  signInButton: {
    margin: theme.spacing(1.3)
  }
}));

export default styles;
