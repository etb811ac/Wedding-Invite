import './footer.scss'

//components
import { Parallax } from 'react-scroll-parallax';

export default function Footer({parallaxSpeed=0}) {
    return (
        <Parallax speed={parallaxSpeed}>
            <footer>
                <p>"Por encima de todo vistanse de amor, que es el vinculo perfecto" - Colosenses 3:14</p>
                <img src={require('../assets/logo.png')} alt="" />  
            </footer>
        </Parallax>
    )
}