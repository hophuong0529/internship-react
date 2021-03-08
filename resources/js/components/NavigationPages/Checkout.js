import '../../../css/checkout.css'
import React, {useContext, useState} from "react";
import {AccountContext} from "../contexts/AccountContext";
import {CartContext} from "../contexts/CartContext";
import axios from "axios";
import {useHistory} from "react-router";

function Checkout() {
    let history = useHistory();

    const [account] = useContext(AccountContext);
    const {cartItems, setCartItems} = useContext(CartContext);
    const {totalCart, setTotalCart} = useContext(CartContext);
    const [name, setName] = useState(account.name);
    const [mobile, setMobile] = useState(account.mobile);
    const [address, setAddress] = useState(account.address);
    const [note, setNote] = useState();
    const [method, setMethod] = useState(1);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleMobileChange(event) {
        setMobile(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handleNoteChange(event) {
        setNote(event.target.value);
    }

    function handleMethodChange(event) {
        setMethod(event.target.value)
    }

    const handlePay = event => {
        event.preventDefault()

        axios.post(`/api/order`, {name, mobile, address, note, method, account, cartItems})
            .then(() => {
                alert('Đặt hàng thành công. Nhân viên shop sẽ gọi điện xác nhận cho bạn trong thời gian sớm nhất ạ.')
                setCartItems([])
                setTotalCart(0)
                history.push('/')
            })

            .catch(() => {
                alert("Đã xảy ra lỗi. Vui lòng thực hiện lại giao dịch này.")
            })
    }

    return (
        <div id="DIV_1">
            <form id="FORM_2" onSubmit={handlePay}>
                <div id="DIV_3">
                    <div id="DIV_4">
                        <h2 id="H2_5">
                            <span id="SPAN_6">1</span>Thông tin người nhận
                        </h2>
                        <div id="DIV_7">
                            <input id="INPUT_8" name="name" type="text" value={name}
                                   onChange={handleNameChange} placeholder="Họ tên *" required/>
                        </div>
                        <div id="DIV_9">
                            <input id="INPUT_10" name="mobile" type="text" value={mobile}
                                   onChange={handleMobileChange} placeholder="Điện thoại *" required/>
                        </div>
                        <div id="DIV_114">
                            <textarea id="TEXTAREA_115" name="address" rows="2" onChange={handleAddressChange}
                                      value={address}
                                      placeholder="Địa chỉ *" required>{address}
                            </textarea>
                        </div>
                        <div id="DIV_114">
					        <textarea id="TEXTAREA_115" name="note" rows="3" onChange={handleNoteChange} value={note}
                                      placeholder="Ghi chú" required>
                            </textarea>
                        </div>
                        <div id="DIV_116">
                            Đơn hàng trên website được xử lý trong giờ hành chính
                        </div>
                        <div id="DIV_117">
                            Vui lòng liên hệ fanpage ngoài khung giờ trên để được hỗ trợ
                        </div>
                    </div>
                    <div id="DIV_121">
                        <h2 id="H2_122">
                            <span id="SPAN_123">2</span>Phương thức thanh toán
                        </h2>
                        <div id="DIV_124">

                            <label id="LABEL_125">
                                <input type="radio" value="2" onChange={handleMethodChange} name="method_id"/>
                                <div id="DIV_127">
                                    Chuyển khoản trước toàn bộ tiền hàng
                                </div>
                            </label>
                            <div id="DIV_128">
                                <p id="P_129">
                                    <span id="SPAN_130"><span id="SPAN_131"><span id="SPAN_132">Với phương thức Chuyển khoản trước toàn bộ tiền hàng, bộ phận CSKH sẽ gọi điện đến bạn để xác nhận đơn hàng và hướng dẫn cách thức thanh toán chuyển khoản</span></span></span>
                                </p>
                            </div>
                        </div>
                        <div id="DIV_133">
                            <label id="LABEL_134">
                                <input type="radio" value="1" onChange={handleMethodChange} name="method_id" checked/>
                                <div id="DIV_136">
                                    Thanh toán khi nhận hàng
                                </div>
                            </label>
                            <div id="DIV_137">
                                <p id="P_138">
                                    <span id="SPAN_139"><span id="SPAN_140">Thanh toán khi nhận hàng (COD) chỉ áp dụng cho các đơn hàng ở các quận/huyện dưới đây thuộc Hà Nội/TP.HCM:</span></span>
                                </p>
                                <p id="P_141">
                                    <span id="SPAN_142"><span id="SPAN_143">+ Hà Nội: Quận Hoàn Kiếm, Ba Đình, Đống Đa, Hoàng Mai, Hai Bà Trưng, Cầu Giấy, Thanh Xuân,</span> <span
                                        id="SPAN_144">Tây Hồ, Từ Liêm, Hà Đông, Long Biên, Gia Lâm, Sơn Tây, Ba Vì, Mê Linh, Đông Anh, Thường Tín, Thanh Trì</span></span>
                                </p>
                                <p id="P_145">
                                    <span id="SPAN_146"><span id="SPAN_147">+ HCM: Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Tân Bình, Tân Phú, Phú Nhuận, Bình Thạnh, Gò Vấp,</span> <span
                                        id="SPAN_148">Bình Tân, Thủ Đức, Bình Chánh, Nhà Bè, Hooc M</span><span
                                        id="SPAN_149">ôn</span></span>
                                </p>
                            </div>
                        </div>
                        <input type="hidden" id="INPUT_153" name="baokimBankPaymentMethodId"/>
                    </div>
                    <div id="DIV_154">
                        <h2 id="H2_155">
                            <span id="SPAN_156">3</span>Thông tin giỏ hàng
                        </h2>
                        <div id="DIV_157">
                            <table id="TABLE_158">
                                <thead id="THEAD_159">
                                <tr id="TR_160">
                                    <th id="TH_161">
                                        Tên sản phẩm
                                    </th>
                                    <th id="TH_162">
                                        Số lượng
                                    </th>
                                    <th id="TH_163">
                                        Thành tiền
                                    </th>
                                </tr>
                                </thead>
                                <tbody id="TBODY_164">
                                {cartItems.map((item) =>
                                    <tr id="TR_165" key={item.id}>
                                        <td id="TD_166">
                                            <a href="https://moji.vn/tattoo-colorful-sunshine-rainbow-mix-p28877753.html"
                                               id="A_167">{item.name}</a>
                                            <div id="DIV_168">
                                                Đơn giá: <strong
                                                id="STRONG_169">{item.price.toLocaleString()}đ</strong>
                                                <div id="DIV_170">
                                                </div>
                                            </div>
                                        </td>
                                        <td id="TD_171">
                                            {item.quantity}
                                        </td>
                                        <td id="TD_172">
                                            <strong
                                                id="STRONG_173">{(item.price * item.quantity).toLocaleString()}đ</strong>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            <table id="TABLE_174">
                                <tfoot id="TFOOT_175">
                                <tr id="TR_176">
                                    <td colSpan="2" id="TD_177">
                                        <strong id="STRONG_178">Tạm tính</strong>
                                    </td>
                                    <td id="TD_179">
                                        {totalCart?.toLocaleString()}đ
                                    </td>
                                </tr>
                                <tr id="TR_180">
                                    <td colSpan="2" id="TD_181">
                                        Phí vận chuyển
                                    </td>
                                    <td id="TD_182">
                                        0đ
                                    </td>
                                </tr>
                                <tr id="TR_187">
                                    <td colSpan="2" id="TD_188">
                                        <strong id="STRONG_189">Tổng cộng</strong>
                                    </td>
                                    <td id="TD_190">
                                        {totalCart?.toLocaleString()}đ
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div id="DIV_202"/>
                        <div id="DIV_203">
                            <button onClick={handlePay} id="DIV_204">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout
