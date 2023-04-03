import React,{useState,useEffect} from 'react'
import Credit from './Credit';
import {Link} from 'react-router-dom'


export default function Form({setObj}) {
  const [name,setName] = useState('Name');
  const [card,setCard] = useState('Card Number(16 digits)');
  const [cvv,setCvv] = useState('CVV');
  const [exp,setexp] = useState('Expiry date (dd/yy)');
  // const [cardtype,setcardtype] = useState('Credit');


  const getName=(e)=>{
     setName(e.target.value)
    //  activeName(e.target.value)

  }
  function getOption() {
    console.log(document.getElementById('select-cards').value);
    // setcardtype(document.getElementById('select-cards').value)
  }

  
 const handleOnClick=(e)=>{
  e.preventDefault();
  setObj({name:name,cvv:cvv,exp:exp,card:card})
 }

  return (
    <div className='main-form-container'>
      
      <form className='form-container'>
            <input type='/text' onChange={getName} className='input-form' placeholder={name}/>
            <br/>
            <label id='card-label' for="Cards" >Choose Card Type : </label>
            <select name="cards" id="select-cards"  onchange={getOption} >
              <option value="Credit" >Credit</option>
              
              <option value="Debit" >Debit</option>
            </select>
            <input type='/text' onChange={(e)=>{return setCard(e.target.value)}}  className='input-form' placeholder={card} style={{fontSize:'medium'}} />
            <br/>
            <input type='/text' onChange={(e)=>{return setCvv(e.target.value)}} style={{fontSize:'medium'}}  className='input-form' placeholder={cvv}/>
            <input type='/text' onChange={(e)=>{return setexp(e.target.value)}} style={{fontSize:'medium'}}  className='input-form' placeholder={exp}/>
            {/* <input type='/text' style={{fontSize:'medium'}}  className='input-form' placeholder="CVV"/> */}
            <button onClick={handleOnClick} className='form-submit'>
              <Link to="/credit">Submit</Link> </button>
              
              {/* {`$(document.getElementById('select-cards').innerHTML)`==="Credit"? console.log("credit") :console.log("debit")} */}
              {/* {console.log("Heloooooooooooo")} */}
      </form>
    </div>
  )
}
