import React from "react"
import '../assets/css/checkout.css'
function Checkout(){
    return(
        <main>
        <section class="banner__page__title">
            <div class="banner__page__content">
                <div class="banner__left">Checkout</div>
                <div class="banner__right">Home / Checkout</div>
            </div>
        </section>
        <div class="main__checkout__section">
            <div class="checkout-title">
                <h2>Checkout</h2>
                <hr class="checkout-hr" />
                <div class="checkout-table">
                    <div class="table_detail">
                        <table>
                            <tr>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Vat (20%)</th>
                                <th>Total Amount</th>
                            </tr>
                            <tr>
                                <th>Profesional Plan</th>
                                <th>$200.00</th>
                                <th>$20.00</th>
                                <th>$200.00</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="payment">
                <div class="payment-title">
                    <h2>Payment</h2>
                    <hr class="checkout-hr" />
                    
                </div>
                <div class="form__payment">
                    <div class="form__payment__left">
                        <div class="content__input">
                            <div class="select_card">
                                <div class="select-radio">
                                    <i class="fa-solid fa-circle-chevron-down color-icon"></i>
                                    <p>Card / Debit Card</p>
                                </div>
                                <div class="select-item">
                                    <img class="image-card" src="https://banner2.cleanpng.com/20180919/wrz/kisspng-logo-visa-credit-card-debit-card-marco-aurelio-sosa-5ba30e46860054.6994915815374126785489.jpg" alt=""/>
                                    <img class="image-card" src="https://haiphatcorp.com.vn/wp-content/uploads/2021/07/ngan-hang-vietinbank-2.jpg" alt=""/>
                                    <img class="image-card" src="https://chiasevaytien.com/pictures/2020/12/25/1608880760nlpvgg.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="input">
                                <label>Card Number*</label>
                                <input type="text" placeholder="Enter Card Number"/>
                                <label>Full Name*</label>
                                <input type="text" placeholder="Enter Full Name"/>
                                <div class="select">
                                    <div class="expiring">
                                        <label>Expiring*</label>
                                        <div class="input-select">
                                            <select name="" id="">
                                                <option value="Month" default>Month</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="Year" default>Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="cvv">
                                        <label>Cvv*</label>
                                        <input type="text"  placeholder="Cvv"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content__confirm">
                            <i class="fa-solid fa-circle-chevron-down color-icon"></i>
                            <p>I agree to the Terms and Conditions and the Automatic Renewall Term</p>
                        </div>
                    </div>
                    <div class="form__payment__right">
                        <form action="">
                            <div class="radio">
                                <input type="radio"/>Paypal
                            </div>
    
                            <div class="image_checkout">
                                <img  src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt=""/>
                            </div>
                        </form>
                        <p>You will be redirected to Paypal to complete Payment</p>
                    </div>
                </div>
                <button class="btn_payment"> PROCEED PAYMENT</button>
            </div>
        </div>
    </main>
    )
}
export default Checkout