import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const AddressComponent = ({fullName, address})=>{
  
  return(
    <div className="fw-bold">
      <p className="text-uppercase">{fullName}</p>
      <p>{address.street}</p>
      <p>{address.city}, {address.state} </p>
    </div>
  );
}

const Header=({title})=>{
  return(<h1 className="text-center py-2">{title}</h1>)
}

const CreditCard = ({cardInfo})=>{
   return(
     <div className="credit-card-box bg-credit-card shadow">
        <div className='row justify-content-end'>
          <div className="col-sm-8 text-center pt-3">
            <p className="bank-name">{cardInfo.banktitle}</p>
          </div>
        </div>
        <div className="row justify-content-center pt-4">
            <div className="col-sm-12">
              <p className="card-number lh-sm text-center fw-lighter">{cardInfo.cardnumber}</p>
              <div className="row justify-content-center">
                  <div className="col-sm-1 text-wrap lh-sm">
                    <p className="text-center text-white small-text"><small>VALID THRU</small></p>
                  </div>
                  <div className="col-sm-2 text-wrap lh-sm">
                    <p className="text-center card-date">{cardInfo.expdate}</p>
                  </div>
              </div>
            </div>
        </div>
        <div className="row">
          
          <div className="col-sm-10 offset-sm-1 ">
            <p className="text-uppercase card-holder-name pl-5">{cardInfo.holdername}</p>
          </div>
        </div>
     </div>
   );
}

const cardInformation = {
  banktitle:"Big Bank, Inc.",
  cardnumber: "1234 5678 8465 4321",
  expdate:"09/22",
  holdername:"Ahmed Bashir Ahmed"
}

const tempAddress = {
  "fullname": "Ahmed Bashir",
  "address":{
    "street":"Karam Elahi Road",
    "city": "Gujrat",
    "state": "Punjab 50700"
  }
}

const tempAddress2 = {
  "fullname": "Zeeshan Zulfiqar",
  "address":{
    "street":"College Road",
    "city": "Gujranwala",
    "state": "Punjab 50200"
  }
}

const Avatar = ({hash}) => {
  const url = `https://www.gravatar.com/avatar/${hash}`
  return(
    <img
      src = {url}
      className = "img img-fluid"
      alt="avatar"
    />
  );
}

const Envelope = ({fromPerson, toPerson, fromAddress, toAddress})=>{
  return(<div className="container bg-light p-5">
  <div className = "row justify-content-between">
      <div className = "col-sm-3">
        <AddressComponent fullName={fromPerson} address = {fromAddress}/>
      </div>
      <div className = "col-sm-3 float-right">
        <Avatar hash="115664db2439fda3b201825d8c5d320a"/>
      </div>
  </div>
  <div className = "row justify-content-center pb-5">
      <div className = "col-sm-4">
        <AddressComponent fullName={toPerson} address = {toAddress}/>
      </div>
  </div>
  </div>);

}


const Poster = ({src, title, text}) => {
    return(<div className = "row justify-content-center ">
    <div className="col-sm-5 bg-black border rounded p-2">
      <div className="row py-3 justify-content-center">
        <div className="col-sm-8">
          <img 
            src = {src}
            alt = {title}
            className = "img img-fluid align-center"
          />
        </div>
      </div>
      <h2 className="text-center text-white">{title}</h2>
      <h4 className="text-center text-white">{text}</h4>
    </div>
  </div>);
}

const SingleLineEmail = ({email})=>{
  let {sender, subject, date, message} = email;
  return(
    <div className = "container">
      <div className="row email-border pt-2 bg-light">
      <div className="col-sm-12">
        <div className = "row align-items-center">
          <div className="col-sm-1">
            <input type="checkbox" className="form-check-input"></input>
            <i class="fas fa-thumbtack pin"></i>
          </div>
          <div className="col-sm-11 ">
            <div className="row lh-sm">
              <div className = "col-sm-3">
                <p className = "email-header-text text-start">{sender}</p>
              </div>
              <div className = "col-sm-6">
                <p className = "email-header-text text-center">{subject}</p>
              </div>
              <div className = "col-sm-3 ">
                <p className = "email-header-text text-end">{date}</p>
              </div>
            </div>
            <div className="row lh-sm">
              <div className="col-sm-12 lh-vsm">
                <p className="email-body-text">{message} </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const ErrorBox = ({children}) =>{
  return(
    <div className="alert alert-danger" role="alert">
      <i class="fas fa-exclamation-triangle pe-2"></i> 
      {children}
    </div>
  );
}

const demoEmail = {
  sender:"React Newsletter",
  subject: "React Newsletter Issue - 36",
  date: "June 20",
  message: "React Newsletter Issue 16 - June 15th 2021 Read this issue on the web http://reactjs.com/issues/?id=36..."
}

ReactDOM.render(
  <React.StrictMode>
    <Header title="Envelope Exercise"/>
    <Envelope fromPerson = {tempAddress.fullname} fromAddress = {tempAddress.address} toPerson = {tempAddress2.fullname} toAddress = {tempAddress2.address}/>
    <Header title="Credit Card Exercise"/>
    <div className="container">
      <div className ="row justify-content-center">
        <div className="col-sm-4">
          <CreditCard cardInfo={cardInformation}/>
        </div>
      </div>
    </div>
    <Header title="Image Poster Exercise"/>
    <Poster src="https://image.shutterstock.com/image-vector/steel-nail-realistic-vector-illustration-260nw-1174108240.jpg" title="Demotivational Image Poster" text = "Image Poster Example" />
    <br/>
    <Header title="Single Line Email Exercise"/>
    <SingleLineEmail email = {demoEmail}/>
    <div className = "container">
      <div className="row justify-content-center">
        <div className="col-sm-8">
        <Header title="Error Box Child Props Exercise"/>
          <ErrorBox>
            Something has gone wrong
          </ErrorBox>
        </div>
      </div>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


