import "../styles/actEmItem.css";

function ActEmItems(props){
    return(
        <div className="actEmItem" id={props.id}>
            <span>{props.text}</span>
        </div>
    );
}

export default ActEmItems;