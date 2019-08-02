import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  header: {
    flexGrow: 1
  },
  textButtons: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  links: {
    color: "inherit"
  }
}));

export default styles;
