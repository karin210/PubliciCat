import '../styles/header.css';

function Header(props) {

  return(
    <div className="header">
      <nav>
        <a href="home">PCat</a>
      </nav>
      <nav id="navGroup">
        <span id={props.aMenuId}>Menú</span>
        <a href="#actEmpH" id={props.aActId}>Activaciones Empresariales</a>
        <a href="#rentaH" id={props.aRenId}>Renta de equipo y entretenimiento</a>
        <a href="#historiasH" id={props.aHistId}>Historias</a>
        <a href="#nosotrosH" id={props.aNosId}>Nosotros</a>
        <a href="#clientesH" id={props.aClienId}>Clientes</a>
      </nav>
    </div>
  )
}

export default Header;