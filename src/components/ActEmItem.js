import "../styles/actEmItem.css";

function ActEmItems(props){
    return(
        <div className="actEmItem" id={props.id}>
            <span id={props.spanId}>{props.text}</span>
        </div>
    );
}

export default ActEmItems;