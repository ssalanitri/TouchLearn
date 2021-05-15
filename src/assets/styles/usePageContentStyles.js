
import { makeStyles, withStyles } from '@material-ui/core';


const usePageContentStyles  = makeStyles({
    root: {
        display: 'flex',
        width: '60%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '100px',
    },
    img: {
        width: '80%',
        height: '80%',
    },
    container: {
        width: '80%'
    },
});

export default withStyles(usePageContentStyles);