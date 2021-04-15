import propTypes from 'prop-types'


const Button = ({text, color, onClick, className}) => {
    return (
        <button onClick={onClick}style={{backgroundColor: color}}className={className} >
           {text}
        </button>
    )
}
Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
    className: propTypes.string
}
export default Button
