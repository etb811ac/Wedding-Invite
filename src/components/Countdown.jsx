import './countdown.scss'
import flowers from '../assets/flower-d1.png'
import CountdownExt from 'react-countdown';

export default function Countdown() {

    const countdownView = ({ days, hours, minutes }) => {
        return (
            <div className="countdown-widget">
                <div className="timer-wrapper days">{days}<span>día{days === 1 ? undefined : ('s')}</span></div>

                <div className="timer-wrapper hours">{hours} <span>h{hours === 1 ? undefined : ('s')}</span></div>

                <div className="timer-wrapper minutes">{minutes} <span>min</span></div>
            </div>
        )

    }

    return (
        <div id="countdown">
            <div className="container">
                <h3>Faltan</h3>
                <CountdownExt
                    date={new Date('February 24, 2024 010:00:00')}
                    renderer={countdownView}
                />
            </div>
            <img className='flower flower-top-right' src={flowers} alt="" />
            <img className='flower flower-bottom-left' src={flowers} alt="" />
        </div>
    )
}