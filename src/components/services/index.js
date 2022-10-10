import React from "react";
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, 
    ServicesH1, 
    ServicesIcon, 
    ServiceCard, 
    ServicesH2, 
    ServiceWrapper,
    ServicesP,

   } from "./serviceElement";


const Services = () => {
    return(
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>we help to reduce your fees and increase your overall revenue</ServicesP>
                </ServiceCard>
                <ServiceCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>you can access our platform anywhere in the world</ServicesP>
                </ServiceCard>
                <ServiceCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium</ServicesH2>
                    <ServicesP>unlock out special services and get a bonus</ServicesP>
                </ServiceCard>
            </ServiceWrapper>
        </ServicesContainer>
    )
}


export default Services;