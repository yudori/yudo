import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', subject: '', message: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.name + this.state.email+ this.state.subject+ this.state.message);
        document.location.href = "mailto:xyz@something.com";
    }

    render(){
        return(
            <div className="page main-theme">
                <div className="tag-main">Contact</div>
                <div className="content center-page">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl type="text" name="name" value={ this.state.name } onChange={ this.handleChange }/>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="email" name="email" value={ this.state.email } onChange={ this.handleChange }/>
                            <ControlLabel>Subject</ControlLabel>
                            <FormControl type="text" name="subject" value={ this.state.subject } onChange={ this.handleChange }/>
                            <ControlLabel>Message</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Hi Richard!" rows="8" name="message" value={ this.state.message } onChange={ this.handleChange }/>
                        </FormGroup>
                        <Button type="submit"> Send Message</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;