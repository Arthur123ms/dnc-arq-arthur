import "../Button/Button.css"

// assets
import WhiteArrow from '../../assets/arrow-white.svg'



function Button ({arrow, buttonStyle, loading, children, ...props}) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
           {children} {arrow && <img src={WhiteArrow} />}
                    
        </button>
    )
}

export default Button;