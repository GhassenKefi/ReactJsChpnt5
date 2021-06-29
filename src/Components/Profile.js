import React, { Component } from 'react'

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    /* ---- update counter every 1sec ---- */
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.incrementCounter(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div className="Profile">
                <div className="photo zoom">
                    <img className="photo" src={this.props.Person.imgSrc} alt="profile"></img>
                </div>
                <div className="fullname">
                    <span className="column">Full Name :</span>
                    <h2 className="column">{this.props.Person.fullname}</h2>
                </div>
                <div>
                    <span className="column">Profession :</span>
                    <h2 className="column">{this.props.Person.profession}</h2>
                </div>
                <div>
                    <span className="column">Bio :</span>
                    <h2 className="column">{this.props.Person.bio}</h2>
                </div>
                <div>
                    <h2 className="interval">the component has been mounted {this.state.counter} seconds ago</h2>
                </div>
            </div>
        )
    }
}
