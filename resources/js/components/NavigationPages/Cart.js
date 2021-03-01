import React, {useContext, useEffect} from "react";
import '../../../css/cart.css'
import {Link} from "react-router-dom";
import {CartContext} from "../contexts/CartContext";
import {Alert} from "react-bootstrap";
import {ExclamationTriangle} from "react-bootstrap-icons";

function Cart() {
    const {cartItems, setCartItems} = useContext(CartContext)
    const {totalCart, setTotalCart} = useContext(CartContext)

    useEffect(() => {
        const itemsPrice = cartItems.reduce((itemsPrice, item) => itemsPrice + item.price * item.quantity, 0)
        setTotalCart(itemsPrice)
    }, [cartItems, setTotalCart])

    const convertToSlug = (name) => {
        name = name.toLowerCase();

        name = name.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        name = name.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        name = name.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        name = name.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        name = name.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        name = name.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        name = name.replace(/(đ)/g, 'd');
        name = name.replace(/([^0-9a-z-\s])/g, '');
        name = name.replace(/(\s+)/g, '-');
        name = name.replace(/^-+/g, '');
        name = name.replace(/-+$/g, '');

        return name;
    }

    return (
        <div>
            <CartContext.Consumer>
                {({cartItems}) => (
                    cartItems.length === 0 ? (
                        <div style={{height: '250px'}}>
                            <Alert variant="warning" style={{
                                margin: '5%',
                                fontSize: '17px',
                                textAlign: "center",
                                fontWeight: "bold"
                            }}>
                                <ExclamationTriangle style={{marginTop: '-5px'}}/> Giỏ hàng của bạn hiện tại không
                                có sản phẩm nào !</Alert>
                        </div>
                    ) : (
                        <div id="DIV_cart_1">
                            <div id="DIV_cart_2">
                                <div>
                                    <table id="TABLE_cart_4">
                                        <thead id="THEAD_cart_1">
                                        <tr id="TR_cart_1">
                                            <th id="TH_cart_2">
                                                Sản phẩm
                                            </th>
                                            <th id="TH_cart_4">
                                                Mô tả
                                            </th>
                                            <th id="TH_cart_5">
                                                Đơn giá
                                            </th>
                                            <th id="TH_cart_6">
                                                Số lượng
                                            </th>
                                            <th id="TH_cart_7">
                                                Tổng
                                            </th>
                                            <th id="TH_cart_8">
                                                Thao tác
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody id="TBODY_cart_14">
                                        {cartItems.map((item) =>
                                            <tr id="TR_cart_15" key={item.id}>
                                                <td id="TD_cart_16">
                                                    <div id="DIV_cart_17">
                                                        <Link to={'/product/' + convertToSlug(item.name)}>
                                                            <img src={"../../../" + item.images[0].path}
                                                                 id="IMG_cart_20"/>
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td id="TD_cart_21">
                                                    <Link to={'/product/' + convertToSlug(item.name)}
                                                          style={{fontSize: '16px'}}
                                                          className="link-detail">{item.name}</Link>
                                                </td>
                                                <td id="TD_cart_35">
                                                    <strong id="STRONG_cart_36">{item.price.toLocaleString()}đ</strong>
                                                </td>
                                                <td id="TD_cart_37">
                                                    <div id="DIV_cart_38">
                                                        <CartContext.Consumer>
                                                            {({removeToCart}) => (
                                                                <button onClick={() => removeToCart(item)} id="DIV_cart_39">
                                                                    -
                                                                </button>
                                                            )}
                                                        </CartContext.Consumer>

                                                        <div id="INPUT_cart_40">{item.quantity}</div>

                                                        <CartContext.Consumer>
                                                            {({addToCart}) => (
                                                                <button onClick={() => addToCart(item)} id="DIV_cart_41">
                                                                    +
                                                                </button>
                                                            )}
                                                        </CartContext.Consumer>
                                                    </div>
                                                </td>
                                                <td id="TD_cart_42">
                                                    <strong
                                                        id="STRONG_cart_43">{(item.price * item.quantity).toLocaleString()}đ</strong>
                                                </td>
                                                <td id="TD_cart_44">
                                                    <CartContext.Consumer>
                                                        {({removeItem}) => (
                                                            <button onClick={() => {
                                                                if (window.confirm('Bạn muốn xóa sản phẩm này?')) removeItem(item)
                                                            }}
                                                                    id="A_cart_45">Xóa</button>
                                                        )}
                                                    </CartContext.Consumer>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                    <div id="DIV_cart_77">
                                        <p id="P_cart_78">
                                            Hỗ trợ ship 20k cho đơn hàng trên 300k nội thành HN, HCM
                                        </p>
                                        <p id="P_cart_79">
                                            Hỗ trợ ship 30k cho đơn hàng trên 500k toàn quốc
                                        </p>
                                        <p id="P_cart_80">
                                            Đơn hàng trên website được xử lý trong giờ hành chính
                                        </p>
                                    </div>
                                    <div id="DIV_cart_81">
                                        <div id="DIV_cart_82">
                                            Tổng: {totalCart?.toLocaleString()} <sub id="SUB_cart_83">đ</sub>
                                        </div>
                                        <div id="DIV_cart_84">
                                        </div>
                                        <Link to="/products" id="A_cart_85">Tiếp tục mua sắm</Link>
                                        <Link to="/checkout" id="A_cart_86">Thanh toán</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </CartContext.Consumer>
        </div>
    )
}

export default Cart
