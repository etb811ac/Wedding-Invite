import './button.scss'

export default function Button({children, handleClick, clickParameters}){
    return(
        <button id='button' onClick={() => handleClick(clickParameters)}>{children}</button>
    )
}