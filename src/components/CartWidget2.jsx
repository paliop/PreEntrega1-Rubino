
import CartLogo from "/src/assets/images/cart3.svg"



const CartWidget2 = () => {
  return (
    
    <button type="button" className="btn btn-success">

        <img src={CartLogo} width="28"/>
        
        <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill text-bg-success">1</span>


        </button>
  )
}


export default CartWidget2;