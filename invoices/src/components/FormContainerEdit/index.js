import React from 'react';
import Form from "../Form";

class FormContainerEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        let url = `http://localhost:3001/invoices/${id}`;
        fetch(url)
            .then(resp => resp.json())
            .then(({data}) => {
                this.setState({data});
            })
    }

    render() {
        return (
            <>
                <h2 className="title-of-block">Изменить текущий</h2>
                <Form data={this.state.data}/>
            </>
        )
    }
}

export default FormContainerEdit;
