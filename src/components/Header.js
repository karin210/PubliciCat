import '../styles/header.css';
import { useEffect, useState, useRef } from 'react';

function Header(props) {
const menuRef = useRef();
  const [show, setShow] = useState(false);

  
  
  function showMenu(){
  setShow(!show)
  }

  
  useEffect(()=>{ let closeMenu = (e) =>{
    if(show && !menuRef.current.contains(e.target)){
      setShow(false);
    }
    // console.log(menuRef, e.target, menuRef.current.contains(e.target));
  
  };
  document.addEventListener("click", closeMenu);
  return () => document.removeEventListener("click", closeMenu);
  
}, [show]);

  return(
    <div className="header">
      <nav>
        <a href="#home"><img id="logoHeader" alt="logo" src="https://cdn.dribbble.com/users/744913/screenshots/2884904/p_cat_monogram.png"/></a>
      </nav>
      <nav id="navGroup" ref={menuRef}>
        <span onClick={()=>showMenu()} id={props.aMenuId}>Menú</span>
        <a href="#actEmpH" id={props.aActId}>Activaciones Empresariales</a>
        <a href="#rentaH" id={props.aRenId}>Renta de equipo y entretenimiento</a>
        <a href="#historiasH" id={props.aHistId}>Historias</a>
        <a href="#nosotrosH" id={props.aNosId}>Nosotros</a>
        <a href="#clientesH" id={props.aClienId}>Clientes</a>
      </nav>

      {/* dropDown menu */}
      <nav id="dropDownMenu" className={show === false ? "hideMenu" : "showMenu"}>
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