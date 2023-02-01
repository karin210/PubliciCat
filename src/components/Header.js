import '../styles/header.css';

function Header(props) {
  return(
    <div className="header">
      <nav>
        <a>PCat</a>
      </nav>
      <nav id="navGroup">
        <span id={props.aMenuId}>Menú</span>
        <a id={props.aActId}>Activaciones Empresariales</a>
        <a id={props.aRenId}>Renta de equipo y entretenimiento</a>
        <a id={props.aHistId}>Historias</a>
        <a id={props.aNosId}>Nosotros</a>
        <a id={props.aClienId}>Clientes</a>
      </nav>
    </div>
  )
}

export default Header;