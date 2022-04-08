import React, {
    Component
} from 'react';


class BookFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            information: {
                trip: '',
                boardingLocation: '',
                destinationLocation: '',
                depDate: '',
                returnDate: '',
                people: {
                    child: 0,
                    adult: 0
                },
                nationality: ''
            }
        }
        this.increase = this.increase.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    increase = (age) => (evt) => {
        if (age === 'child') {
            const increasedValue = this.state.information.people.child + 1;
            if (this.state.information.people.child >= 10) {
                alert('Cant book for more than 10 child')
            } else {
                this.setState({
                    increased: {
                        ...this.state.information.people.child = increasedValue
                    }
                })
            }

        } else {
            const increasedValue = this.state.information.people.adult + 1;
            if (this.state.information.people.adult >= 10) {
                alert('Cant book for more than 10 Adult')
            } else {
                this.setState({
                    increased: {
                        ...this.state.information.people.adult = increasedValue
                    }
                })
            }

        }

    }

    decrease = (age) => (evt) => {
        if (age === 'child') {
            const Value = this.state.information.people.child;
            const ChangedValue = Value - 1;
            if (Value > 0) {
                this.setState({
                    decrease: {
                        ...this.state.information.people.child = ChangedValue
                    }
                })
            }
        } else {
            const Value = this.state.information.people.adult;
            const ChangedValue = Value - 1;
            if (Value > 0) {
                console.log(ChangedValue)
                this.setState({
                    decrease: {
                        ...this.state.information.people.adult = ChangedValue
                    }
                })
            }
        }

    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const innerText = target.innerText;
        const name = target.name;
        const checkClass = target.className;

        if (name === 'select') {
            const rbs = document.querySelectorAll('input[name="select"]');
            for (const rb of rbs) {
                if (rb.checked) {

                    this.setState({
                        information: {
                            ...this.state.information.trip = rb.value
                        }
                    });
                    break;
                }

            }

        }
        this.setState({
            information: {
                ...this.state.information,
                [name]: value
            }
        });
    }

    render() {
        console.log(this.state.information)
        return (

            <>
                <form className="book-flight__form">
                    <p className='book-flight__title'>Book a flight</p>

                    <div class="book-flight__radio">
                        <input type="radio" name="select" id="one" value='One Way' onClick={this.handleInputChange} />
                        <input type="radio" name="select" id="two" value='Two Way' onClick={this.handleInputChange} />
                        <input type="radio" name="select" id="three" value='Mountain Trip'
                            onClick={this.handleInputChange} />

                        <label for="one" class="book-flight__button option-1">
                            <span>One way</span>
                        </label>
                        <label for="two" class="book-flight__button option-2">
                            <span>Two Way</span>
                        </label>
                        <label for="three" class="book-flight__button option-3">
                            <span>Mountain Trip</span>
                        </label>
                    </div>

                    <div className="book-flight__inputs">

                        <div className="select__wrapper">
                            <p className='select__info'>Boardind</p>
                            <div className="select">
                                <select id="standard-select" onChange={this.handleInputChange} name='boardingLocation'>
                                    <option value="Kathmandu">Kathmandu</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                    <option value="Option 5">Option 5</option>
                                </select>
                                <span className="focus"></span>
                            </div>
                        </div>

                        <div className="select__wrapper">
                            <p className='select__info'>Destination</p>
                            <div className="select">
                                <select id="standard-select" onChange={this.handleInputChange}
                                    name='destinationLocation'>
                                    <option value="Biratnager">Biratnager</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                    <option value="Option 5">Option 5</option>
                                </select>
                                <span className="focus"></span>
                            </div>
                        </div>

                        <div className="select__wrapper select__wrapper-half">
                            <p className='select__info'>Depart</p>
                            <div className="select select-drop">
                                <input type='date' id="standard-select" placeholder='Date'
                                    onChange={this.handleInputChange} name='depDate' />
                            </div>
                        </div>

                        <div className="select__wrapper select__wrapper-half">
                            <p className='select__info'>Return</p>
                            <div className="select select-drop">
                                <input type='date' id="standard-select" placeholder='Date'
                                    onChange={this.handleInputChange} name='returnDate' />
                            </div>
                        </div>

                        <div className="select__wrapper select__wrapper--flex">

                            <div className="adult book__age">
                                <p className='select__info'>Adult</p>
                                <div className="book__age-wrapper">
                                    <div className="book__age-increase" onClick={this.increase('adult')}><img
                                            src="./Assets/icons/Icon awesome-plus.png" alt="" /></div>
                                    <div className="book__age-info">
                                        <p>{this.state.information.people.adult}</p>
                                    </div>
                                    <div className="book__age-decrease" onClick={this.decrease('adult')}><img
                                            src="./Assets/icons/Icon awesome-minus.png" alt="" /></div>
                                </div>
                            </div>

                            <div className="adult book__age">
                                <p className='select__info'>Child</p>
                                <div className="book__age-wrapper">
                                    <div className="book__age-increase" onClick={this.increase('child')}><img
                                            src="./Assets/icons/Icon awesome-plus.png" alt="" /></div>
                                    <div className="book__age-info">
                                        <p>{this.state.information.people.child}</p>
                                    </div>
                                    <div className="book__age-decrease" onClick={this.decrease('child')}> <img
                                            src="./Assets/icons/Icon awesome-minus.png" alt="" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="select__wrapper select-wrapper__nation">
                            <p className='select__info'>Nationality</p>
                            <div className="select">
                                <select id="standard-select" onChange={this.handleInputChange} name='nationality'>
                                    <option value="Option 1">Nep/Ind</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                    <option value="Option 5">Option 5</option>
                                </select>
                                <span className="focus"></span>
                            </div>
                        </div>

                    </div>

                    <div className="search-flight">
                        <button className="search__button">Srarch Flights</button>
                    </div>

                </form>

            </>

        );
    }
}

export default BookFlight;