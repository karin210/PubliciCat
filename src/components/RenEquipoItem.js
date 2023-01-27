import "../styles/rentEquipoItem.css";

function RenEquipoItem(props){
    return(
        <div className="rentaItem" id={props.id}>
            <img src={props.img}/>
            <span>{props.text}</span>
        </div>
    );
}

export default RenEquipoItem;