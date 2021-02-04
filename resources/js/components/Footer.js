import {Component} from "react";
import '../../css/footer.css'
import {Facebook, GeoAltFill, Google, StarFill, Twitter, Youtube} from "react-bootstrap-icons";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="site-footer">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="row">
                                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-4">
                                    <div className="footer-widget">
                                        <h3 style={{color: 'black', fontWeight: 'bold'}}>MOJIY</h3>
                                        <div className="ttlh">
                                            <p>Showroom 1: 165 Cầu Giấy - Cầu Giấy - Hà Nội
                                                <br/>
                                                Showroom 2: 165 Dương Quảng Hàm - Hà Nội
                                                <br/>
                                                Email : phuong_anh@gmail.com
                                                <br/>
                                                Hotline : 1900.888.888</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-2 col-lg-2">
                                    <div className="footer-widget">
                                        <h4><span><StarFill/> Hướng dẫn</span></h4>
                                        <div className="list-menu">
                                            <a href="#">Đăng ký thành viên</a>
                                            <a href="#">Mua hàng Online</a>
                                            <a href="#">Mua hàng trả góp</a>
                                            <a href="#">Hướng dẫn dùng Laptop</a>
                                            <a href="#">Tư vấn chọn Laptop</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-2 col-lg-2">
                                    <div className="footer-widget">
                                        <h4><span><StarFill/> Chính sách</span></h4>
                                        <div className="list-menu">
                                            <a href="#">Chính sách thanh toán</a>
                                            <a href="#">Chính sách vận chuyển</a>
                                            <a href="#">Chính sách đổi trả</a>
                                            <a href="#">Chính sách hoàn tiền</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-2 col-lg-2">
                                    <div className="footer-widget">
                                        <h4><span><StarFill/> Hỗ trợ</span></h4>
                                        <div className="list-menu">
                                            <a href="#">DV Hỗ trợ miễn phí</a>
                                            <a href="#">Hỗ trợ đổi cũ lấy mới</a>
                                            <a href="#">Hỗ trợ giải đáp</a>
                                            <a href="#">Hợp tác bán hàng</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-1 col-lg-2">
                                    <div className="footer-widget no-border">
                                        <h4><span><StarFill/> Kết nối</span></h4>
                                        <div className="list-menu list-menu-social">
                                            <a href="#">
                                                <Facebook/> Facebook
                                            </a>
                                            <a href="#">
                                                <Youtube/> Youtube
                                            </a>
                                            <a href="#">
                                                <Twitter/> Twitter
                                            </a>
                                            <a href="#">
                                                <Google aria-hidden="true"/> Google
                                            </a>
                                            <a href="#">
                                                <GeoAltFill/> Chỉ dẫn đường đi
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head">
                    <span style={{color: 'rgb(192 79 79)', fontSize: '14px'}}>© Bản quyền thuộc về Mojiy Việt Nam | Cung cấp bởi Phương Hồ</span>
                </div>
            </div>
        )
    }
}

export default Footer
