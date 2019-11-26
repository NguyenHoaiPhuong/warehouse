import { connect } from 'react-redux';
import MiniDrawer from '../../components/navibar/AppBar'
import { AppState } from '../../states/AppState';

const mapStateToProps = (state: AppState) => ({
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);