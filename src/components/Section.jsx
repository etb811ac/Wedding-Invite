import './section.scss'

//components
import { Parallax } from 'react-scroll-parallax';

export default function Section({ title, body, children, classes, parallaxSpeed=5, wave }) {
    return (
        <Parallax speed={parallaxSpeed}>
            <section id='section' className={classes}>
                {wave?(
                    <img className='wave' src={wave} alt="" />
                ):undefined}
                <div className="section-wrapper">

                    {title ? (
                        <div className="section-title">{title}</div>
                    ) : undefined}

                    {body ? (
                        <div className="section-body">{body}</div>
                    ) : undefined}

                    {children}

                </div>

            </section>
        </Parallax>
    )
}