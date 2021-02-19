import {Component} from "react";
import '../../css/login.css'
import axios from "axios";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleLogin(event) {
        event.preventDefault()

        const {history} = this.props

        const username = this.state.username
        const password = this.state.password

        axios.post(`/api/login`, {username, password})
            .then(() => {
                alert('Đăng nhập thành công.')
                history.push('/')
            })
            .catch(() => {
                alert('Tên đăng nhập hoặc mật khẩu không chính xác.')
            })
    }

    render() {
        return (
            <main id="MAIN_1">
                <div id="DIV_2">
                    <div id="DIV_3">
                        <a href="#" rel="nofollow" id="A_4">Đăng nhập</a> <a href="#" rel="nofollow"
                                                                             id="A_5">Đăng ký</a>
                    </div>
                    <form id="FORM_6" onSubmit={this.handleLogin}>
                        <input type="hidden" id="INPUT_7"/>
                        <div id="DIV_8">
                            <input type="text" name="username" value={this.state.username}
                                   onChange={this.handleUsernameChange} id="INPUT_9"
                                   placeholder="Nhập tên đăng nhập" required/>
                        </div>
                        <div id="DIV_10">
                            <input type="password" name="password" value={this.state.password}
                                   onChange={this.handlePasswordChange} id="INPUT_11"
                                   placeholder="Mật khẩu" required/>
                        </div>
                        <div id="DIV_12">
                            <button id="BUTTON_13">Đăng nhập</button>
                            <a href="#" rel="nofollow" id="A_14">Quên mật khẩu?</a>
                            <p id="P_15">
                                Hoặc đăng nhập với
                            </p>
                            <div id="DIV_16">
                                <a id="A_17"> Đăng nhập bằng facebook</a>
                            </div>
                            <div id="DIV_19">
                                <a id="A_20"> Đăng nhập Google</a>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

export default Login
