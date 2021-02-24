import React, {useContext, useState} from "react";
import '../../css/login.css'
import axios from "axios";
import {AccountContext} from "./contexts/AccountContext";
import {useHistory} from "react-router";

function Login() {
    const history = useHistory()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useContext(AccountContext);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleLogin = event => {
        event.preventDefault()

        axios.post(`/api/login`, {username, password})
            .then(response => {
                setAccount(response.data)
                alert('Đăng nhập thành công. Chào mừng bạn quay trở lại.')
                history.push(`/`)
            })

            .catch(() => {
                alert('Tên đăng nhập hoặc mật khẩu không chính xác.')
            })
    }

    return (
        <main id="MAIN_login_10">
            <div id="DIV_login_20">
                <div id="DIV_login_30">
                    <a href="#" rel="nofollow" id="A_login_40">Đăng nhập</a>
                    <a href="#" rel="nofollow" id="A_login_50">Đăng ký</a>
                </div>
                <form id="FORM_login_60" onSubmit={handleLogin}>
                    <input type="hidden" id="INPUT_login_70"/>
                    <div id="DIV_login_80">
                        <input type="text" name="username" value={username}
                               onChange={handleUsernameChange} id="INPUT_login_90"
                               placeholder="Nhập tên đăng nhập" required/>
                    </div>
                    <div id="DIV_login_100">
                        <input type="password" name="password" value={password}
                               onChange={handlePasswordChange} id="INPUT_login_101"
                               placeholder="Mật khẩu" required/>
                    </div>
                    <div id="DIV_login_102">
                        <button id="BUTTON_login_103">Đăng nhập</button>
                        <a href="#" rel="nofollow" id="A_login_104">Quên mật khẩu?</a>
                        <p id="P_login_105">
                            Hoặc đăng nhập với
                        </p>
                        <div id="DIV_login_106">
                            <a id="A_login_107"> Đăng nhập bằng facebook</a>
                        </div>
                        <div id="DIV_login_109">
                            <a id="A_login_200"> Đăng nhập Google</a>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
