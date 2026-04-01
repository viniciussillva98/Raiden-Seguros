import { forwardRef } from 'react';
import { Button, Container, Content, SubTitle, Title } from './styles';


type InicioProps = {
    onNavigate: (section: string) => void;
};


// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Inicio = forwardRef<HTMLDivElement, InicioProps>(({ onNavigate }, ref) => {
    return (
        <Container ref={ref}>
            <Content>
                <Title>Seu Patrimônio em Boas Mãos, com a confiança <br />que só a Raiden Seguros oferece!</Title>
                <SubTitle>Tranquilidade e segurança para você viver com mais liberdade.</SubTitle>
                <Button onClick={() => onNavigate('contato')} >Solicitar cotação</Button>
            </Content>
        </Container>
    );
});

export default Inicio;