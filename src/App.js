import './App.css';
import ActEmItems from './components/ActEmItems';
import Header from './components/Header';
import Historia from './components/Historia';
import RenEquipoItems from './components/RenEquipoItems';
import SectionH1 from './components/SectionH1';
function App() {
 

  return (
    // home page
    <div className="App">
     <Header />
     <div className="slides"></div>

    {/* Activaciones Empresariales page */}
    <div className="actEmp">
      <SectionH1 
        text = "Activaciones Empresariales"
      />
      <ActEmItems 
        id = "actEmItem1"
      />
      <ActEmItems
      id = "actEmItem2"
       />
       <ActEmItems
      id = "actEmItem3"
       />
       <ActEmItems
      id = "actEmItem4"
       />
       <ActEmItems
      id = "actEmItem5"
       />
       <ActEmItems
      id = "actEmItem6"
       />
       <ActEmItems
      id = "actEmItem7"
       />
       <ActEmItems
      id = "actEmItem8"
       />
       <ActEmItems
      id = "actEmItem9"
       />
    </div>

    {/* Renta de equipo page */}
    <div className="rentEquipo">
      <SectionH1 
        text = "Renta de equipo"
      />
      <div className="rentEquipo-items">
        <RenEquipoItems
        img = "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        text = "DJ" 
        />
        <RenEquipoItems
        img = "https://images.unsplash.com/photo-1604818659463-34304eab8e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        text = "Iluminación LED" 
        />
        <RenEquipoItems
        img = "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
        text = "Audio PRO" 
        />
        <RenEquipoItems
        img = "https://http2.mlstatic.com/D_NQ_NP_992607-MLM45082624058_032021-V.jpg"
        text = "Cabezas robóticas" 
        />
        <RenEquipoItems
        img = "https://www.tufieston.com/dynamic/gallery/2143/zanqueros-s.l.p.-1.jpg"
        text = "Zanqueros" 
        />
        <RenEquipoItems
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BEqhLihCEJgLcHqTjFkmCdT2L0nJ6aCYOJwcBhWUJd42zQVKoe_USZKQOdeyqt3vqyA&usqp=CAU"
        text = "Chisperos electrónicos" 
        />
        <RenEquipoItems
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
    </div>
    </div>
  );
}

export default App;


// Modify the tittle