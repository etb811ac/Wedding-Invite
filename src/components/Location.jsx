import './location.scss'

//components
import Button from './Button'

export default function Location(props) {
    const handleGoTo = (url => {
        window.open(url, '_blank').focus();
    })

    return (
        <div className="location-container">
            <div className="title">{props.title}</div>

            {props.info.map(el => {
                return (
                    <div key={el.title} className="info">
                        <div className="info-title">{el.title}</div>
                        <div className="info-body">{el.body}</div>
                        <Button handleClick={handleGoTo} clickParameters={el.btnUrl}>{el.btnTxt}</Button>
                    </div>
                )
            })}
        </div>
    )
}