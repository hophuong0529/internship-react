import {Shop} from "react-bootstrap-icons";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{borderTop: 'white 3px solid', paddingLeft: '50px'}}>
                <a className="navbar-brand" href="#" style={{width: '50px', textAlign: 'center'}}>
                    <Shop style={{fontSize: '25px'}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">TRANG CHỦ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">SẢN PHẨM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">GIỚI THIỆU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">TIN TỨC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">LIÊN HỆ</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Tất cả</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Đăng nhập</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Đăng ký</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation

