import {useState} from 'react'
import Product from "./Product";


function App() {
  const [products, setProducts] = useState([
    {
      image: "https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png",
      title: "Nutro™ Adult Lamb and Rice Dog Food",
      description: "Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!",
      price: 45.99,
      quantity: 0,
      id:0
    },
    {
      image: "https://s.cdpn.io/3/dingo-dog-bones.jpg",
      title: "Dingo Dog Bones",
      description: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
      price: 12.99,
      quantity: 0,
      id:1
    },
    {
      image: "https://s.cdpn.io/3/dingo-dog-bones.jpg",
      title: "Dingo Dog Bones",
      description: "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
      price: 12.99,
      quantity: 0,
      id:2
    }
  ])

  const [total,setTotal] = useState(0)

  const setQuantity = (value, id) => {
    let neededIndex = products.findIndex((p) => p.id === id)
    products[neededIndex].quantity = Number(value)
  }

  const thankYou = () => {
    console.log("thank")
    alert("Thank you for your purchase!")
  }

  const deleteProd = (id) => {
    let neededIndex = products.findIndex((p) => p.id === id)

    let tempQuantity;
    
    if(products[neededIndex+1] !== undefined) {
       tempQuantity = products[neededIndex+1].quantity
    }
    let deleted = products.filter((p) => p.id === id)
    let newTot = Math.round((total-deleted[0].price*deleted[0].quantity)*10)/10
    setTotal(newTot)
    let newProducts = products.filter((p) => p.id !== id)
    setProducts(newProducts)
    if (products[neededIndex+1] !== undefined) {
      setQuantity(tempQuantity, products[neededIndex+1].id)
    }
    
  }

  let shippingPrice;
  if (total === 0 ) {shippingPrice=0 } else {shippingPrice = 14.99}
  let tax = Math.round(total * 0.05 * 10)/10;
  let grandTotal = Math.round((tax+shippingPrice+total)*10)/10;

  

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

<div className="shopping-cart">

  <div className="column-labels">
    <label className="product-image">Image</label>
    <label className="product-details">Product</label>
    <label className="product-price">Price</label>
    <label className="product-quantity">Quantity</label>
    <label className="product-removal">Remove</label>
    <label className="product-line-price">Total</label>
  </div>

  
  
    {products.map((product, idx) => {
      return <Product deleteProduct={deleteProd} key = {idx} id={product.id} quantity={product.quantity} image={product.image} title={product.title} description={product.description} price={product.price} setQuantity={setQuantity} total={total} setTotal={setTotal}/>
    } ) }
  
  

  

  <div className="totals">
    <div className="totals-item">
      <label>Subtotal</label>
      <div className="totals-value" id="cart-subtotal">{total}</div>
    </div>
    <div className="totals-item">
      <label>Tax (5%)</label>
      <div className="totals-value" id="cart-tax">{tax}</div>
    </div>
    <div className="totals-item">
      <label>Shipping</label>
      <div className="totals-value" id="cart-shipping">{shippingPrice}</div>
    </div>
    <div className="totals-item totals-item-total">
      <label>Grand Total</label>
      <div className="totals-value" id="cart-total">{grandTotal}</div>
    </div>
  </div>
      
      <button className="checkout" onClick={() => {
        thankYou()
      }}>Checkout</button>

</div>
    </div>
  );
}

export default App;
