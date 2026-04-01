import { forwardRef } from 'react';
import SobreImage from '../../assets/car.png'; // Importe a imagem que deseja usar
import { Container, Image, SobreContent, Text, Title } from './styles';

// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Sobre = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <Container ref={ref}>
            <Image src={SobreImage} alt="Sobre a Raiden Seguros" />
            <SobreContent>
                <Title>Sobre a Raiden Seguros</Title>
                <Text>A Raiden Seguros é sinônimo de proteção e inovação, oferecendo soluções
                    personalizadas que garantem segurança e tranquilidade para nossos clientes
                    <br /> em todo o país.<br />
                    Nossa missão é entregar atendimento transparente, eficiente e próximo, sempre
                    focando na confiança e na satisfação de quem nos escolhe.<br />
                    Com 10 anos de experiência em seguros, planos de saúde e consórcios, estamos
                    comprometidos em proteger o que importa
                    para você — seja sua família, seu patrimônio ou seu futuro.<br />
                    Raiden Seguros: força e proteção que você pode confiar!<br />
                    Na Raiden Seguros, cada serviço é pensado para cuidar de você com dedicação e
                    excelência, porque sua segurança é o nosso maior compromisso.</Text>
            </SobreContent>
        </Container>
    );
});

export default Sobre;