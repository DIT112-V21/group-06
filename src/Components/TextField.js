import propTypes from 'prop-types'


const  TextField= ({text, className, type, id}) => {
    return (
        <input   className={className} type={type} placeholder= {text} id={id} >
        </input>
    )
}
TextField.propTypes = {
    text: propTypes.string,
    id: propTypes.string,
    type: propTypes.string,
    className: propTypes.string
}
TextField.defaultProps = {
    className: "input",
    type: "text"
}
export default TextField

