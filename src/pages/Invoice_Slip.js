import React from "react"
import '../assets/css/invoice.css'
function Invoice_Slip(){
    return( 
        <div class="main__invoice">
        <div class="main__invoice__header">
            <div class="invoice__logo">
                <img src="./image/44_invoice_view.png" alt="" />
                <p class="name-jobby">Jobby</p>
            </div>
            <div class="name-invoice">Invoice</div>
        </div>
        <div class="main__invoice__body">
            <div class="text_title">
                <div class="date">
                    <div class="text">
                        <p><strong>Date:</strong></p>
                        <p>10 December 2018</p>
                    </div>
                    <div class="text">
                        <p><strong>Date:</strong></p>
                        <p>10 December 2018</p>
                    </div>
                    <div class="text">
                        <p><strong>Date:</strong></p>
                        <p>10 December 2018</p>
                    </div>
                </div>
            </div>
            <h3>Invoice</h3>
            <div class="body">
                <div class="customer">
                    <strong>Customer</strong>
                    <p>Rock Ưilliam</p>
                    <p>133, Dracut</p>
                    <p>Massachutsetts</p>
                    <p>D1826</p>
                    <p>United State</p>
                </div>
                <div class="supplier">
                    <strong>Supplier</strong>
                    <p>Jobby LTD</p>
                    <p>#1234, AHSASJIAJSIA</p>
                    <p>Near MBD Mail</p>
                    <p>141001</p>
                    <p>Luciajnksak áiosodms</p>
                </div>
            </div>
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
                <div class="invoice__total">
                    <strong>Invoice Total:USD $220.00</strong>
                    <p>Pail via Paypal</p>
                </div>
            </div>
            <div class="footer_invoice">
                <p>Thanh for buying</p>
                <div class="button-print">
                    Print
                </div>
            </div>
        </div>
    </div>
    )
}
export default Invoice_Slip