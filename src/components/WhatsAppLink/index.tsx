
import React from 'react';
import ImageWhats from '../../assets/logoW.png';
import { Image, LinkWhats } from './styles';

const WhatsappLink: React.FC = () => {
    const phoneNumber = '5555997239331'; // Substitua pelo número desejado sem (DDD + código país, sem "+" ou espaços)
    const message = `Olá, Raiden Seguros! Gostaria de saber mais sobre os seus serviços.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <LinkWhats href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <Image src={ImageWhats} alt="WhatsApp" />
        </LinkWhats>
    );
};

export default WhatsappLink;