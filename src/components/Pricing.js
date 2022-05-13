import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartPricingSlice'

function Pricing({pricing}){

  const dispatch = useDispatch()
  const handleAddCart=(data)=>{
      dispatch(addToCart(data))
      alert("Lưu thành công vào giỏ hàng")
  }
    return(
        <div class="tab-content">
            <div class="tab-pane actives">
              <div class="container__pricing__list">
                {pricing.map((item)=>(
                     <div class="pricing__item" key={item.id}>
                     <div class="pricing__content">
                       <img src={item.image}/>
                       <h3>{item.name}</h3>
                       <p class="bg-color">
                         <strong>${item.price.toFixed(2)}</strong>/ {item.type}
                       </p>
                       <p>{item.listing}</p>
                       <p>{item.visibility} days visibility</p>
                       <p>
                         {item.content}
                       </p>
                     </div>
                     <div onClick={()=>handleAddCart({
                       id:item.id,
                       name:item.name,
                       price:item.price,
                     })} class="button_purchase">PURCHASE NOW</div>
                   </div>
                ))}
              </div>

              <div class="statement__pricing">
                <h3>Statement</h3>
                <table>
                  <tr>
                    <th>Date</th>
                    <th>Order ID</th>
                    <th>Details</th>
                    <th>Type</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <th>10 December 2018</th>
                    <th>1258963487</th>
                    <th>
                      <p>Profesional Plan</p>
                      <p>Invoice:IVIP12345678</p>
                    </th>
                    <th>Monthly</th>
                    <th>$200.00</th>
                  </tr>
                  <tr>
                    <th>10 December 2018</th>
                    <th>1258963487</th>
                    <th>
                      <p>Profesional Plan</p>
                      <p>Invoice:IVIP12345678</p>
                    </th>
                    <th>Monthly</th>
                    <th>$200.00</th>
                  </tr>
                  <tr>
                    <th>10 December 2018</th>
                    <th>1258963487</th>
                    <th>
                      <p>Profesional Plan</p>
                      <p>Invoice:IVIP12345678</p>
                    </th>
                    <th>Monthly</th>
                    <th>$200.00</th>
                  </tr>
                  <tr>
                    <th>10 December 2018</th>
                    <th>1258963487</th>
                    <th>
                      <p>Profesional Plan</p>
                      <p>Invoice:IVIP12345678</p>
                    </th>
                    <th>Monthly</th>
                    <th>$200.00</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
    )
}
export default Pricing