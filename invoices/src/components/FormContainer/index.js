import React from 'react';
import Form from "../Form";
class FormContainer extends React.Component{
    render() {
        return(
            <>
                <h2 className="title-of-block">Добавить новый</h2>
            <Form/>
            </>
        )
    }
}
export default FormContainer;
