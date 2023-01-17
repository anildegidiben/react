import React from 'react'
import './Card.css';
import resim1 from "../img/Z8286A6.jpg"
import resim2 from "../img/W6742A6.jpg"
import resim3 from "../img/Z7777A6.jpg"
import resim4 from "../img/Z8036A6.jpg"
import resim5 from "../img/A0670A8.jpg"
import resim6 from "../img/Z5957A6.jpg"
import resim7 from "../img/Z8958A6.jpg"
import resim8 from "../img/Z8966A6.jpg"

function Card(props) {

 

  return (
    <div className="card">
        
        <div className="res">
            <img src={props.resim} alt="" className='resim' />
           
        </div>
        <div className="bilgi">
            <p>Model: {props.model}</p><hr />
            <p>Sipariş Adedi: {props.adet}</p><hr />
            <p>Termin: {props.termin}</p><hr />
            <p>Fiyat: {props.fiyat} TL</p>
           
        </div>
    </div>
  )
}

export default Card