import '../../../css/admin-header.css'
import {Link} from "react-router-dom";
import {List} from "react-bootstrap-icons";

function AdHeader() {
    return (
        <header id="HEADER_he_1">
            <div id="DIV_he_2">
                <div id="DIV_he_3">
                    <List/>
                </div>
            </div>
            <Link to="/admin/" id="A_he_4"><b id="B_he_5">DASH<span id="SPAN_he_6">IO</span></b></Link>
            <div id="DIV_he_7">
                <ul id="UL_he_8">
                    <li id="LI_he_9">
                        <Link to="#" id="A_he_10">Logout</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default AdHeader
