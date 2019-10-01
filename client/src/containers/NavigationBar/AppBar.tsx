import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../components/NavigationBar/styles'
import { MiniDrawer } from '../../components/NavigationBar/AppBar'

export default connect()(withStyles(styles as any, { withTheme: true })(MiniDrawer));