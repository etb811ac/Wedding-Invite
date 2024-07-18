import './card.scss'

//components
import Button from './Button'



export default function Card({onButtonClicked, ...props}) {
    
    return (
        <div id="card" className={props.classes}>
            <div className="card-title"> {props.title} </div>

            <img src={props.icon} alt="" />

            <div className="card-body"> {props.body} </div>

            <Button handleClick={() => {onButtonClicked(true, props.index)}} >{props.buttonText}</Button> 
        </div>
    )

}