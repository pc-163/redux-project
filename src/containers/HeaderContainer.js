import { connect } from "react-redux";
import Header from '../components/header/header'

const mapStateToProps = state => ({
      
      data:state.cardItems

})

const mapDispatchToProps = dispatch => ({
     
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)