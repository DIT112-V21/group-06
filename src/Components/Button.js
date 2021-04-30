import propTypes from 'prop-types'


const Button = ({text, color, onClick, onMouseDown, onMouseUp, className, id}) => {
    return (
        <button onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={{backgroundColor: color}} className={className} id = {id} >
           {text}
        </button>
    )
}
Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
    onMouseDown: propTypes.func,
    onMouseUp: propTypes.func,
    className: propTypes.string
}
export default Button
