import { Component } from 'react';
const axios = require('axios').default;




let xmls='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:book="http://booking.us.org/"> \
            <soapenv:Header/> \
            <soapenv:Body> \
            <book:FlightAvailability> \
            <strUserId>PRABHU</strUserId> \
            <strPassword>PR_PASS_0120</strPassword> \
            <strAgencyId>PLZ120</strAgencyId> \
            <strSectorFrom>KTM</strSectorFrom> \
            <strSectorTo>BWA</strSectorTo> \
            <strFlightDate>30-09-2017</strFlightDate> \
            <strReturnDate></strReturnDate> \
            <strTripType>O</strTripType> \
            <strNationality>NP</strNationality> \
            <intAdult>1</intAdult> \
            <intChild>0</intChild> \
            <strClientIP>49.25.14.12</strClientIP> \
            </book:FlightAvailability> \
            </soapenv:Body> \
            </soapenv:Envelope>';

class Check extends Component {
    constructor(props) {
        super(props);
        axios.post('http://booking.us.org/.asmx?wsdl',
           xmls,
           {headers:
             {'Content-Type': 'text/xml'}
           }).then(res=>{
             console.log(res);
           }).catch(err=>{console.log(err)});
        this.state = {  }
    }

    

    render() { 
        return ( 
            <>
            </>
         );
    }
}
 
export default Check;