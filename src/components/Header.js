import '../styles/header.css';

function Header(props) {

  function showMenu(){
    const dropDownMenu = document.querySelector("#dropDownMenu");
    if(dropDownMenu.classList.contains("hideMenu")){
      dropDownMenu.classList.add("showMenu");
      dropDownMenu.classList.remove("hideMenu");
    } else {
      dropDownMenu.classList.add("hideMenu");
      dropDownMenu.classList.remove("showMenu");
    }
    
  }

  return(
    <div className="header">
      <nav>
        <a href="home">PCat</a>
      </nav>
      <nav id="navGroup">
        <span onClick={()=>showMenu()} id={props.aMenuId}>Menú</span>
        <a href="#actEmpH" id={props.aActId}>Activaciones Empresariales</a>
        <a href="#rentaH" id={props.aRenId}>Renta de equipo y entretenimiento</a>
        <a href="#historiasH" id={props.aHistId}>Historias</a>
        <a href="#nosotrosH" id={props.aNosId}>Nosotros</a>
        <a href="#clientesH" id={props.aClienId}>Clientes</a>
      </nav>

      {/* dropDown menu */}
      <nav id="dropDownMenu" className="hideMenu">
        <a href="#actEmpH" id={props.actMenu}>Activaciones Empresariales</a>
        <a href="#rentaH" id={props.renMenu}>Renta de equipo y entretenimiento</a>
        <a href="#historiasH" id={props.hisMenu}>Historias</a>
        <a href="#nosotrosH" id={props.nosMenu}>Nosotros</a>
        <a href="#clientesH" id={props.cliMenu}>Clientes</a>
      </nav>
    </div>
  )
}

export default Header;