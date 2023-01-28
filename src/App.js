import './App.css';
import HomeSlide from './components/HomeSlide';
import ActEmItem from './components/ActEmItem';
import Header from './components/Header';
import Historia from './components/Historia';
import RenEquipoItem from './components/RenEquipoItem';
import SectionH1 from './components/SectionH1';
function App() {
  return (
    // Home page
    <div className="App">
      <Header />
      <HomeSlide />
    {/* Activaciones Empresariales page */}
    <div className="actEmp">
      <SectionH1 
        text = "Activaciones Empresariales"
        id = "actEmp-h"
      />
      <ActEmItem 
      id = "actEmItem1"
      text = "Perifonéo"        
      />
      <ActEmItem
      id = "actEmItem2"
      text = "Renta de bocinas"        
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
       />
    </div>
    {/* Renta de equipo page */}
    <div className="rentEquipo">
      <SectionH1 
        text = "Renta de equipo"
      />
      <div className="rentEquipo-items">
        <RenEquipoItem
        img = "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        text = "DJ" 
        id = 'rentEquipo-item1'
        />
        <RenEquipoItem
        img = "https://images.unsplash.com/photo-1604818659463-34304eab8e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        text = "Iluminación LED" 
        id = 'rentEquipo-item2'
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
        text = "Historias"
        id = "historias-h"
        />
      <Historia 
        id= "historia1"
      />
      <Historia 
      id= "historia2"
      />
      <Historia 
      id= "historia3"
      />
      <Historia
      id= "historia4"
      />
      <Historia 
      id= "historia5"
      />
      <Historia 
      id= "historia6"
      />
      <Historia 
      id= "historia7"
      />
    </div>
    {/* Nosotros page */}
    <div className="nosotros">
      <SectionH1 
        text = "Nosotros"
      />
      <div className="nosotrosItem">
        <img className="nosotrosImg" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        <span className="nosotrosImgTxt">Equipo de PubliciCat</span>
      </div>
      <p className="nosotrosLeyenda">En PubliciCat somos un equipo con amplia experiencia en proyectos publicitarios. También contamos con servicio de renta de equipos de audio profesional y luces LED para eventos</p>
      <h2>Team</h2>
      <section id='teamMembers'>
        <div className="teamItems">
          <img className="nosotrosTeamImg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/>
          <span className="membersInfo">Anna Abbey</span>
        </div>
        <div className="teamItems">
          <img className="nosotrosTeamImg" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <span className="membersInfo">Andy Keiffer</span>
        </div>
        <div className="teamItems">
          <img className="nosotrosTeamImg" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <span className="membersInfo">Cindy Allin</span>
        </div>
        <div className="teamItems">
          <img className="nosotrosTeamImg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <span className="membersInfo">Carla López</span>
        </div>
      </section>
      <h2>Contacto</h2>
      <section className="contacto">
        <div className="contactoKeyVal">
          <div className="contactoKey">e-mail:</div>
          <div className="contactoVal">user@domain.com</div>
        </div>
        <div className="contactoKeyVal">
          <div className="contactoKey">Whatsapp:</div>
          <div className="contactoVal">335-342-8074</div>
        </div>
        <div className="contactoKeyVal">
          <div className="contactoKey">Tel:</div>
          <div className="contactoVal">335-342-8074</div>
        </div>
      </section>
      <h2>Dirección</h2>
      <section id="ubicacion">
        <div className="ubicacionKeyVal">
          <div className="ubicacionKey">Ciudad:</div>
          <div className="ubicacionVal">Morelia, Mich.</div>
        </div>
        <div className="ubicacionKeyVal">
          <div className="ubicacionKey">Colonia:</div>
          <div className="ubicacionVal">Nueva Valladolid</div>
        </div>
        <div className="ubicacionKeyVal">
          <div className="ubicacionKey">Calle:</div>
          <div className="ubicacionVal">C. Gaspar de Villadiego #117</div>
        </div>
      </section>
      <iframe id="ubicacionMap" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60099.371156965004!2d-101.24114339215568!3d19.703651853022688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0ba2b29da7e3%3A0x4016978679c8620!2sMorelia%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1674764716878!5m2!1ses-419!2smx" 
      width="80%" 
      height="200px%" 
      style={{border: "0"}} 
      allowfullscreen="" 
      loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    {/* Clientes page/ */}
    <div className="clientes">
      <SectionH1 
          text = "Clientes"
          id= "clientes-h"
        />
      <div className="clientesLogos">
        <img className="clientImg" src="https://static.vecteezy.com/system/resources/previews/007/978/618/original/pepsi-popular-drink-brand-logo-vinnytsia-ukraine-may-16-202-free-vector.jpg" />
        <img className="clientImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_de_Cherdraui.svg/2560px-Logo_de_Cherdraui.svg.png" />
        <img className="clientImg" src="https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg" />
        <img className="clientImg" src="https://www.paredro.com/wp-content/uploads/2018/10/El-logotipo-de-Sanborns-%C2%BFSon-3-bu%CC%81hos-o-tecolotes.jpg" />
        <img className="clientImg" src="https://cdn.milenio.com/uploads/media/2019/07/25/telcel-tambien-se-cayo-telcel.jpg" />
        <img className="clientImg" src="https://static.wixstatic.com/media/34569a_db1e8cf5c6ad43668db22bc493632e76.jpg/v1/fill/w_549,h_344,al_c,lg_1,q_80,enc_auto/34569a_db1e8cf5c6ad43668db22bc493632e76.jpg" />
        <img className="clientImg" src="https://static.wixstatic.com/media/cdb00b_cc343be0c3ab4b6d8fe22f39c7f5b5e3~mv2.png/v1/crop/x_188,y_113,w_789,h_744/fill/w_470,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_laa-PERFORADO.png" />
        <img className="clientImg" src="https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/5EY3TGRKWNC7BETJGJTSNJP5YI.png" />
      </div>
    </div>
    </div>
  );
}

export default App;


// Modify the tittle