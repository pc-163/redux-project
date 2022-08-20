import { connect } from "react-redux";
import Home from '../components/home'
import { addToCart } from "../service/actions/action";

const mapStateToProps = state => ({
      cardData: state
})

const mapDispatchToProps = dispatch => ({
      addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)