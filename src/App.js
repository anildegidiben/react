import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Component/Card';
import resim1 from "./img/Z8286A6.jpg"
import resim2 from "./img/W6742A6.jpg"
import resim3 from "./img/Z7777A6.jpg"
import resim4 from "./img/Z8036A6.jpg"
import resim5 from "./img/A0670A8.jpg"
import resim6 from "./img/Z5957A6.jpg"
import resim7 from "./img/Z8958A6.jpg"
import resim8 from "./img/Z8966A6.jpg"

function App() {

  return (
    <div className="App">

      <div className="nav">
        <div className="container">
          <div className="baslik">
          <h1>ESA MODA SİPARİŞLER</h1>
          </div>  
        </div>
      </div>

       <div className="container">
          <div className="row ">
            <div className="col-3">
               <Card model="Z8286A6" adet="1416" termin="01.03.2023" fiyat="115" resim="img/Z8286A6.jpg" />         
            </div>
            <div className="col-3">
               <Card model="W6742A6" adet="4290" termin="06.03.2023" fiyat="112" resim="img/W6742A6.jpg"></Card>         
            </div>
            <div className="col-3">
               <Card model="Z7777A6" adet="10693" termin="06.03.2023" fiyat="92"resim ="img/Z7777A6.jpg"></Card>         
            </div>
            <div className="col-3">
               <Card model="Z8036A6" adet="16912" termin="27.02.2023" fiyat="135"resim ="img/Z8036A6.jpg"></Card>         
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
               <Card model="A0670A8" adet="1200" termin="06.02.2023" fiyat="121" resim="img/A0670A8.jpg" />         
            </div>
            <div className="col-3">
               <Card model="Z5957A6" adet="1131" termin="27.02.2023" fiyat="235" resim="img/Z5957A6.jpg"></Card>         
            </div>
            <div className="col-3">
               <Card model="Z8958A6" adet="1200" termin="06.02.2023" fiyat="99"resim ="img/Z8958A6.jpg"></Card>         
            </div>
            <div className="col-3">
               <Card model="Z8966A6" adet="1200" termin="06.02.2023" fiyat="115"resim ="img/Z8966A6.jpg"></Card>         
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
