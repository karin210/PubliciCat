import "../styles/rentEquipoItems.css";

function RenEquipoItems(props){
    return(
        <div className="rentaItem">
            <img src={props.img}/>
            <span>{props.text}</span>
        </div>
    );
}

export default RenEquipoItems;