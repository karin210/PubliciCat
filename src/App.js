import './App.css';
import HomeSlide from './components/HomeSlide';
import Slides from './components/Slides';
import ActEmItem from './components/ActEmItem';
import Header from './components/Header';
import Historia from './components/Historia';
import RenEquipoItem from './components/RenEquipoItem';
import SectionH1 from './components/SectionH1';
import locationMap from './images/locationMap.png';

function App() {
  return (
    // Home page
    <div id="home" className="App">
      <Header 
        aMenuId = "aMenu"
      />
      {/* Slides */}
      <Slides />
      {/* <HomeSlide /> */}
    {/* Activaciones Empresariales page */}
    <div className="actEmp">
      <SectionH1 
        text = "Activaciones Empresariales"
        id = "actEmpH"
      />
      <div className="actEmpItems">
        <ActEmItem 
        id = "actEmItem1"
        text = "Perifonéo"        
        />
        <ActEmItem
        id = "actEmItem2"
        text = "Renta de bocinas" 
        spanId = "actEmItemTxt2"       
        />
        <ActEmItem
        id = "actEmItem3"
        text = "Animadores/as"        
        />
        <ActEmItem
        id = "actEmItem4"
        text = "Edecanes (AAA y AA)"        
        />
        <ActEmItem
        id = "actEmItem5"
        text = "Zanqueros"        
        />
        <ActEmItem
        id = "actEmItem6"
        text = "Promovendedores"        
        />
        <ActEmItem
        id = "actEmItem7"
        text = "Volanteros"        
        />
        <ActEmItem
        id = "actEmItem8"
        text = "Publiandantes"        
        />
        <ActEmItem
        id = "actEmItem9"
        text = "Marketing de redes sociales"   
        spanId = "actEmItemText9"     
        />
      </div>
    </div>

    {/* Renta de equipo page */}
    <div className="rentEquipo">
      <SectionH1 
        text = "Renta de equipo y entretenimiento"
        id = "rentaH"
      />
      <div className="rentEquipoItems">
        <RenEquipoItem
        img = "https://images.unsplash.com/photo-1651065700017-a741fc4a7f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        text = "DJ" 
        />
        <RenEquipoItem
        img = "https://images.unsplash.com/photo-1604818659463-34304eab8e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        text = "Iluminación LED" 
        />
        <RenEquipoItem
        img = "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
        text = "Audio PRO" 
        />
        <RenEquipoItem
        img = "https://http2.mlstatic.com/D_NQ_NP_992607-MLM45082624058_032021-V.jpg"
        text = "Cabezas robóticas" 
        />
        <RenEquipoItem
        img = "https://www.tufieston.com/dynamic/gallery/2143/zanqueros-s.l.p.-1.jpg"
        text = "Zanqueros" 
        />
        <RenEquipoItem
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BEqhLihCEJgLcHqTjFkmCdT2L0nJ6aCYOJwcBhWUJd42zQVKoe_USZKQOdeyqt3vqyA&usqp=CAU"
        text = "Chisperos electrónicos" 
        />
        <RenEquipoItem
        img = "https://entrefiestas.com/imagen/blog/souvenirs-para-tus-15-anos-2.jpg"
        text = "Souvenirs" 
        />
      </div>
    </div>

    {/* Historias page */}
    <div className="historias">
      <SectionH1 
        text= "Historias"
        id= "historiasH"
      />
      <div className="historiasItems">
        <Historia 
          id= "historia1"
          txt= "Animadores con PublicMOBILE"
        />
        <Historia 
          id= "historia2"
          txt= "Edecán AAA como ring girl en evento de box"
        />
        <Historia 
          id= "historia3"
          txt= "Preparación de iluminación y audio para boda"
        />
        <Historia
          id= "historia4"
          txt= "Preparación de iluminación y audio para XV años"
        />
        <Historia 
          id= "historia5"
          txt= "Preparación de iluminación y audio para concierto al aire libre"
        />
        <Historia 
          id= "historia6"
          txt= "Preparación de iluminación y audio para concierto de Los Ángeles Azules"
        />
        <Historia 
          id= "historia7"
          txt= "Preparación de iluminación y audio para concierto de La Sonora Santanera"
        />
      </div>
    </div>

    {/* Nosotros page */}
    <div className="nosotros">
      <SectionH1 
        text = "Nosotros"
        id = "nosotrosH"
      />
      <figure className="nosotrosFigure">
      <img alt="Equipo PubliCat" className="nosotrosImg" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        <figcaption className="nosotrosImgTxt">Equipo de PubliciCat</figcaption>
      </figure>
      <p className="nosotrosLeyenda">En PubliciCat somos un equipo con amplia experiencia en proyectos publicitarios. También contamos con servicio de renta de equipos de audio profesional y luces LED para eventos</p>
      <h2 className="subsectionH2">Equipo</h2>
      <section id='teamMembers'>
        <figure className="teamFigure">
          <img alt="Anna" className="teamImg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
          <figcaption className="teamImgTxt">Anna Abbey</figcaption>
        </figure>
        <figure className="teamFigure">
          <img alt="Andy" className="teamImg" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <figcaption className="teamImgTxt">Andy Keiffer</figcaption>
        </figure>
        <figure className="teamFigure">
          <img alt="Cindy" className="teamImg" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <figcaption className="teamImgTxt">Cindy Allin</figcaption>
        </figure>
        <figure className="teamFigure">
          <img alt="Carla" className="teamImg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <figcaption className="teamImgTxt">Carla López</figcaption>
        </figure>
      </section>
      <h2 className="subsectionH2">Contacto</h2>
      <section className="contacto">
        <ul className="contactoKeyVal">
          <li className="contactoKey">e-mail:</li>
          <li className="contactoVal">user@domain.com</li>
        </ul>
        <ul className="contactoKeyVal">
          <li className="contactoKey">Whatsapp:</li>
          <li className="contactoVal">335-342-8074</li>
        </ul>
        <ul className="contactoKeyVal">
          <li className="contactoKey">Tel:</li>
          <li className="contactoVal">335-342-8074</li>
        </ul>
      </section>
      <h2 className="subsectionH2">Dirección</h2>
      <section id="ubicacion">
        <ul className="ubicacionKeyVal">
          <li className="ubicacionKey">Ciudad:</li>
          <li className="ubicacionVal">Morelia, Mich.</li>
        </ul>
        <ul className="ubicacionKeyVal">
          <li className="ubicacionKey">Colonia:</li>
          <li className="ubicacionVal">Nueva Valladolid</li>
        </ul>
        <ul className="ubicacionKeyVal">
          <li className="ubicacionKey">Calle:</li>
          <li className="ubicacionVal">C. Gaspar de Villadiego #117</li>
        </ul>
      </section>
      <a href="https://www.google.com/maps/place/C.+Gaspar+de+Villadiego+117,+Nueva+Valladolid,+58190+Morelia,+Mich./@19.6936108,-101.2159938,17z/data=!4m6!3m5!1s0x842d0e83040c2611:0xd09c3970fa153acc!8m2!3d19.6951866!4d-101.2159616!16s%2Fg%2F11c57d57yg"><img id="locationMap" alt="map" src={locationMap} /></a>
    </div>

    {/* Clientes page/ */}
    <div className="clientes">
      <SectionH1 
          text = "Clientes"
          id= "clientesH"
        />
      <div className="clientesLogos">
        <img alt="Pepsi" className="clientImg" src="https://static.vecteezy.com/system/resources/previews/007/978/618/original/pepsi-popular-drink-brand-logo-vinnytsia-ukraine-may-16-202-free-vector.jpg" />
        <img alt="Chedraui" className="clientImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_de_Cherdraui.svg/2560px-Logo_de_Cherdraui.svg.png" />
        <img alt="CocaCola" className="clientImg" src="https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg" />
        <img alt="Sanborns" className="clientImg" src="https://www.paredro.com/wp-content/uploads/2018/10/El-logotipo-de-Sanborns-%C2%BFSon-3-bu%CC%81hos-o-tecolotes.jpg" />
        <img alt="Telcel" className="clientImg" src="https://cdn.milenio.com/uploads/media/2019/07/25/telcel-tambien-se-cayo-telcel.jpg" />
        <img alt="Barezzito" className="clientImg" src="https://static.wixstatic.com/media/34569a_db1e8cf5c6ad43668db22bc493632e76.jpg/v1/fill/w_549,h_344,al_c,lg_1,q_80,enc_auto/34569a_db1e8cf5c6ad43668db22bc493632e76.jpg" />
        <img alt="Los angeles azules" className="clientImg" src="https://static.wixstatic.com/media/cdb00b_cc343be0c3ab4b6d8fe22f39c7f5b5e3~mv2.png/v1/crop/x_188,y_113,w_789,h_744/fill/w_470,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_laa-PERFORADO.png" />
        <img alt="La sonora santanera" className="clientImg" src="https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/5EY3TGRKWNC7BETJGJTSNJP5YI.png" />
      </div>
    </div>
    </div>
  );
}

export default App;


/*
  Bugs:
  - to get a logo for the page.
  -insert the logo at the tittle.
  -On click on the home anchor it doens't scolls smooth.
  - to put cursor pointers to the clickeable elements.
*/ 