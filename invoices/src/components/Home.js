import React, {Component} from 'react';
import Invoices from "./invoices";
import "./Home.css";
import AddNew from "./AddNew";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    render() {
        return (
            <div className="invoice">
                <h2 className="title-of-block">Invoices</h2>
                <AddNew/>
                <Invoices/>
            </div>
        )
    }
}

export default Home;