import './banner.scss'
import { useState } from 'react'

//data
import { BANNER_IMAGES } from '../../src/data.js'
import { useEffect } from 'react'



export default function Banner() {
    const [mobileBg, setMobileBg] = useState(0)


    useEffect(() => {
        incrementAfterDelay(5000, 1, 2);
    }, []);

    const incrementAfterDelay = (delay, step, lastStep) => {
        setTimeout(
            () =>
                setMobileBg((value) => {
                    return (value < lastStep) ? value + step : 0
                }, incrementAfterDelay(delay, step, lastStep)),
            delay
        );
    };


    return (
        <div className="banner-container">

            <div className="banner-gallery">
                <div className="left" style={
                    {
                        backgroundImage: 'url(' + BANNER_IMAGES[0].src + ')',
                        backgroundPosition: 'calc(50% - 4px) calc(50% - 123px)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>

                </div>
                <div className="right">
                    <div className="up" style={
                        {
                            backgroundImage: 'url(' + BANNER_IMAGES[1].src + ')',
                            backgroundPosition: 'calc(50% - 10px) calc(50%)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '50%'
                        }}></div>


                    <div className="down"
                        style={
                            {
                                backgroundImage: 'url(' + BANNER_IMAGES[2].src + ')',
                                backgroundPosition: 'calc(50% - 146px) calc(50% - 60px)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '100%',
                                height: '50%'
                            }}></div>
                </div>

            </div>

            <div className="banner-gallery-mobile"
                style={{ backgroundImage: 'url(' + BANNER_IMAGES[mobileBg].src + ')' }}
            >

            </div>

            <div className="banner-body">
                <img src={require('../assets/flower-d2.png')} alt="" className="top-logo" />
                <div className="banner-date">
                    24.02.2024
                </div>
                <div className="banner-logo">
                    <img src={require('../assets/logo.png')} alt="" />
                </div>
                <div className="banner-quote">
                    Mejor prestémonos para que cada uno sea uno, para poder ser dos
                </div>
            </div>
        </div>
    )

}