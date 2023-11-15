import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../components/Container/Container.styles.js';
import "react-responsive-carousel/lib/styles/carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import logo1 from '../../imgs/studying_re_deca.svg';
import logo2 from '../../imgs/meditating_re_aiqa.svg';
import logo3 from '../../imgs/building_blocks_re_5ahy.svg';

export default function About() {
    return (
        <Container>
            <Carousel autoPlay dynamicHeight={false} infiniteLoop={true} interval={2500} showArrows={false} showThumbs={false}>
                <div>
                    <img src={logo1} alt="Logo of a person studying" />
                    <h2>Avoid distractions</h2>
                    <p>Keep your work on track using timed sessions.</p>
                </div>
                <div>
                    <img src={logo2} alt="Logo of a person relaxing" />
                    <h2>Clear your mind</h2>
                    <p>Reward yourself with short breaks and get refreshed</p>
                </div>
                <div>
                    <img src={logo3} alt="Logo of building blocks" />
                    <h2>Get Started</h2>
                    <p className=''>Stay focused, get rid of procrastination and improve your productivity.</p>
                </div>
            </Carousel>
        </Container>
    )
}