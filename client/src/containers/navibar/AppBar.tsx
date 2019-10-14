import { connect } from 'react-redux';
import MiniDrawer from '../../components/navibar/AppBar'
import { AppState } from '../../states/AppState';

const mapStateToProps = (state: AppState) => ({
    accessToken: state.auth.accessToken,
    refreshToken: state.auth.refreshToken
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);