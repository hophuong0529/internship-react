import '../../../css/admin-left.css'
import {HouseDoorFill, Stack} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

function AdLeft() {
    return (
        <div id="DIV_left_1">
            <ul id="UL_left_2">
                <p id="P_left_3">
                    <img src={"../../../storage/images/avatar.jpg"} width="80" alt="" id="IMG_left_5" />
                </p>
                <h5 id="H5_left_6">
                    Phương
                </h5>
                <li id="LI_left_7">
                    <Link to="/admin/" id="A_left_8"><HouseDoorFill style={{marginTop: '-5px', marginRight: '10px'}}/> <span id="SPAN_left_10">Dashboard</span></Link>
                </li>
                <li id="LI_left_11">
                    <Link to="/admin/products" id="A_left_12"><Stack style={{marginRight: '10px'}}/> <span id="SPAN_left_14">Products</span></Link>
                </li>
                <li id="LI_left_15">
                    <a href="#" id="A_left_16"><Stack style={{marginRight: '10px'}}/> <span id="SPAN_left_18">Categories</span></a>
                </li>
                <li id="LI_left_19">
                    <a href="http://localhost/internship-laravel/admin/carts" id="A_left_20"><Stack style={{marginRight: '10px'}}/> <span id="SPAN_left_22">Carts</span></a>
                </li>
            </ul>
        </div>
    )
}

export default AdLeft
