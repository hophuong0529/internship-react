import {Component} from "react";
import {ListUl} from "react-bootstrap-icons";
import {ListGroup} from "react-bootstrap";

class Categories extends Component {
    constructor(props) {

        super(props);
        this.state = {
            categories: [],
        }
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
                <a href="#" key={category.id} className="list-group-item list-group-item-action">
                    {category.name}
                </a>
            );
        })
    }

    render() {
        return (
            <div>
                <ListGroup as='ul'>
                    <h6 className="list-group-item header" style={{marginBottom: 0}}><ListUl/>&emsp;DANH MỤC SẢN PHẨM</h6>
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
