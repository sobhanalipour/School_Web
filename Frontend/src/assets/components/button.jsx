import "../componentsCSS/button.css/"

function Button(props) {
    return (
        <button className="fw-bold">{props.title}</button>
    )
}

export default Button