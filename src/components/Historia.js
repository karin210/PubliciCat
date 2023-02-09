import "../styles/historia.css";
import { useRef, useState } from "react";

function Historia(props){

    const [modal, setModal] = useState(true);


    const historia = useRef(null);
    const historiaTxt = useRef(null);
    function showTxt (){
      if(modal){
      historiaTxt.current.style.display = "block";
      setModal(!modal);
      } else {
          historiaTxt.current.style.display = "none";
          setModal(modal);
        }
    }

    return(
        <div ref={historia} onClick={showTxt} className="historia" id={props.id}>
            <p ref={historiaTxt} className="histTxt">{props.txt}</p>
        </div>
    );
}

export default Historia;