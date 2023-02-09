import "../styles/historia.css";

function Historia(props){
    return(
        <div className="historia" id={props.id}>
            <p className="histTxt">{props.txt}</p>
        </div>
    );
}

export default Historia;