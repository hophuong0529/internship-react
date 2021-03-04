import {BagCheckFill, Shop} from "react-bootstrap-icons";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "./contexts/CartContext";
import {AccountContext} from "./contexts/AccountContext";

function Navigation() {
    const [account] = useContext(AccountContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light"
             style={{borderTop: 'white 3px solid', paddingLeft: '50px'}}>
            <Link to="#" className="navbar-brand" style={{width: '50px', textAlign: 'center'}}>
                <Shop style={{fontSize: '25px'}}/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="" className="nav-link">TRANG CHỦ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">GIỚI THIỆU</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">TIN TỨC</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">LIÊN HỆ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Tất cả</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SẢN PHẨM
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/category/ao" className="dropdown-item">Áo</Link>
                            <Link to="/category/quan" className="dropdown-item">Quần</Link>
                            <Link to="/category/set" className="dropdown-item">Set</Link>
                            <Link to="/category/phu-kien" className="dropdown-item">Phụ kiện</Link>
                        </div>
                    </li>
                </ul>
                {account.length !== 0 ? (
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <CartContext.Consumer>
                                {({cartItems}) => (
                                    <Link to="/cart" className="nav-link">
                                        <BagCheckFill style={{marginTop: '-5px'}}/> Giỏ hàng
                                        <span style={{
                                            fontSize: '0.85rem',
                                            fontWeight: "bold",
                                            marginLeft: '1.5px'
                                        }}>({cartItems.length})
                                        </span>
                                    </Link>
                                )}
                            </CartContext.Consumer>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Xin chào, {account.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button className="dropdown-item">Đăng xuất</button>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Đăng nhập</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Đăng ký</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                <BagCheckFill style={{marginTop: '-5px'}}/> Giỏ hàng
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navigation

