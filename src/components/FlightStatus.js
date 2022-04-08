import React, { Component } from 'react';

class FlightStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flightStatus: {
                flightNo: '',
            }
         }
         this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            flightStatus:{...this.state.flightStatus, [name]: value}
        });
    }



    render() { 
        console.log(this.state.flightStatus)
        return (
            <>
                <form className="book-flight__form">

                    <p className='book-flight__title'>Search Your Booking</p>
                    <div className="book-flight__inputs book-flight__input--block">

                        <div className="select__wrapper">
                            <p className='select__info'>Flight Number</p>
                            <div className="select select_number-text select-drop select--full">
                                <input type='date' id="standard-select" placeholder='Date'
                                    value={this.state.flightStatus.flightNo} onChange={this.handleInputChange} name='flightNo' />
                            </div>
                        </div>

                    </div>

                    <div className="search-flight">
                        <button className="search__button">Flight Status</button>
                    </div>

                </form>

            </>
);
    }
}
 
export default FlightStatus;