import { makeStyles } from '@material-ui/core/styles';



const styles = makeStyles(theme => ({
  header: {
    fontFamily: 'Roboto'
  },
  card: {
    width: 250,
    margin: 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  cardBody: {
    paddingTop: 0
  },
  cardHeader: {
    paddingTop: 10,
    paddingBottom: 10
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  search: {
    marginBottom: 40,
    [theme.breakpoints.down('md')]: {
      marginBottom: 15
    }
  },
  searchContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  addClientButton: {
    minWidth: 156.45,
    maxHeight: 36.5,
    marginLeft: 30,
    marginBottom: 40
  },
  buttonIcon: {
    marginRight: theme.spacing(2)
  }
}));

export default styles;
