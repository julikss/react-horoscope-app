import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Sign extends Component {
    constructor(props) {
        super(props);
    }
    
    renderDescription(sign) {
        if (this.props.sign !== null) {
                return (
                    <div key={sign.id}>
                        <p>{sign.description}</p>
                    </div>
                );
        } else {
            return(
                <div></div>
            )            
        }
    }

    render() {  
        return (
                <div className="row align-self-center border-top border-warning">
                    <div className="col-12 col-md-2 mt-3 mb-5">
                        <Card>
                            <CardImg height="250px" top src={this.props.sign.image} alt={this.props.sign.name} />
                            <CardBody>
                            <CardTitle className="h4">{this.props.sign.name}</CardTitle>
                            <CardText>{this.props.sign.date}</CardText>
                            </CardBody> 
                        </Card>
                    </div>
                    <div className="col-12 col-md-10 mt-3">
                            <h4>Your Personality</h4>
                            {this.renderDescription(this.props.sign)}
                    </div>
                </div>
        )
    }
}

export default Sign;