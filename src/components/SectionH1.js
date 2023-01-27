import "../styles/sectionH1.css";

function SectionH1(props){
    return(
        <h1 className="section-header" id={props.id}>{props.text}</h1>
    );
}

export default SectionH1;