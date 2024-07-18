//dependencies
import './App.scss';
import { useState } from 'react';


//components
import Section from './components/Section';
import Card from './components/Card';
import Countdown from './components/Countdown';
import Location from './components/Location';
import { ParallaxProvider } from 'react-scroll-parallax';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import BackgroundMusic from './components/BackgroundMusic.jsx';
import PhotoAlbum from "react-photo-album";

//data
import { CARDS, LOCATION, GALERY } from '../src/data.js'

//images
//waves
import wave1 from './assets/waves/wave-1.svg'
import wave2 from './assets/waves/wave-2.svg'
import wave3 from './assets/waves/wave-3.svg'
import wave4 from './assets/waves/wave-4.svg'
//flowers
import flower3 from './assets/flower-d3.png'
//arrow-down
import arrow from './assets/arrow-down.svg'


function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState();

  const openModal = ((value, index) => {
    setModalOpen(value)
    setModalIndex(index)
  })
  return (
    <ParallaxProvider>

      <div className="App">

        <img src={arrow} alt="" className="arrow-scroll" />

        <Section parallaxSpeed={-40}
          classes="banner-section">
          <Banner />
        </Section>

        <Section parallaxSpeed={0}
          wave={wave1}
          classes="countdown-section">


          <Countdown></Countdown>
          <div className="info-widget">
            {LOCATION.map(location => {
              return (
                <Location key={location.title} {...location} />
              )
            })}
          </div>
        </Section>

        <Section wave={wave2}
          classes="gallery-section"
          parallaxSpeed={15}>
          <PhotoAlbum
            layout="masonry"
            photos={GALERY}
            columns={(containerWidth) => {
              if (containerWidth < 400) return 2;
              if (containerWidth < 800) return 2;
              return 3;
            }} />
        </Section>


        <Section title='Fiesta'
          body='Sentite parte de nuestra celebración. Te dejamos algunos detalles.'
          classes="party-section"
          parallaxSpeed={30}
          wave={wave3}>
          <div className="cards-widget">
            {CARDS.map((card, index) => {
              return (
                <Card onButtonClicked={openModal} key={card.title} index={index} {...card} />
              )

            })}
          </div>

        </Section>

        <Section title='Regalos'
          classes="gifts-section"
          body='Su presencia será nuestro mejor regalo, pero si aún así querés contribuir en nuestra futura vida juntos, tendremos un pequeño baúl en la recepción, para las muestras de cariño en efectivo.'
          parallaxSpeed={5}
          wave={wave4}>
          <div className='gifts-section-rose'>
            <img src={flower3} alt="" />
          </div>
        </Section>

        <Footer></Footer>

        {modalOpen ? (
          <Modal onClose={openModal} index={modalIndex}></Modal>
        ) : undefined}
      </div>

      <BackgroundMusic />
    </ParallaxProvider>
  );
}

export default App;
