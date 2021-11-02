import React from 'react'
import CartProduct from './CartProduct'

function Cart() {
    return (
        <div className = "cart">
             <div className = "left">
                <h2 className = "cart__title" >Your Shopping Cart</h2>        
                <CartProduct/>
             </div>

             <div className = "right">
                 <div>
                    {/* <Subtotal /> */}
                 </div>
             </div>
        </div>
    )
}

export default Cart
