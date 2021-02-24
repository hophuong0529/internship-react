import {Component} from "react";
import {ListUl} from "react-bootstrap-icons";
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

class Categories extends Component {
    constructor(props) {

        super(props);
        this.state = {
            categories: [],
        }
    }

    convertToSlug(name) {
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

    componentDidMount() {
        fetch('/api/categories')
            .then(response => {
                return response.json();
            })
            .then(categories => {
                this.setState({categories});
            });
    }

    renderCategories() {
        return this.state.categories.map(category => {
            return (
                <Link to={"category/" + this.convertToSlug(category.name)} key={category.id} className="list-group-item list-group-item-action">
                    {category.name}
                </Link>
            );
        })
    }

    render() {
        return (
            <div>
                <ListGroup as='ul'>
                    <h6 className="list-group-item header" style={{marginBottom: 0}}><ListUl/>&emsp;DANH MỤC SẢN PHẨM
                    </h6>
                    {this.renderCategories()}
                    <a href="#" className="list-group-item list-group-item-action">
                        Sản phẩm giảm giá
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Sản phẩm bán chạy
                    </a>
                </ListGroup>
            </div>

        );
    }
}

export default Categories
