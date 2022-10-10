import React, {useState} from "react";
import {Button} from '../Button'
import {HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroP,
    HeroH1,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper

} from './HeroSectionElements'
import Video from '../../video/video.mp4';


const HeroSection = () =>{


    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }



    return(
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoplay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Virtuel Banking Made easy</HeroH1>
                    <HeroP>sign up for whatever you wanna do with your life bro</HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter={onHover}
                         onMouseLeave={onHover}
                         primary='true'
                         dark='true'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true'
                            offset={-80}>
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection;