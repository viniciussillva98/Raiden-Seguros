import logoRaiden from "../../assets/logoRaiden.png";
import { ContainerContato, ContainerFooter, ContainerLeft, ContainerRight, ContentFooter, FooterAll, HeaderFooter, Image, TerxtHeader, TextContato, TextFooter, TextLeft, TitleLeft, TitleRight } from "./styles";
function Footer() {

    return (
        <ContainerFooter>
            <HeaderFooter>
                <TerxtHeader>Enfrente o futuro com confiança — nossa proteção sólida e confiável está ao seu lado.</TerxtHeader>
            </HeaderFooter>

            <ContentFooter>
                <ContainerLeft>
                    <Image src={logoRaiden} alt="Logo Raiden" />
                    <TitleLeft>Raiden Corretora de Seguros Ltda</TitleLeft>
                    <TextLeft>Entre em contato conosco hoje mesmo para descobrir como podemos  <br /> ajudar a garantir sua segurança e tranquilidade.</TextLeft>
                </ContainerLeft>
                <ContainerRight>
                    <TitleRight>INFORMAÇÕES DE CONTATO</TitleRight>
                    <ContainerContato>
                        <TextContato><span>Telefone: </span><a href="tel:(11) 1234-5678">11 1234-5678</a></TextContato>
                        <TextContato><span>Email: </span><a href="mailto:contato@raiden.com.br">contato@raiden.com.br</a></TextContato>
                        <TextContato><span>Endereço: </span>Av. Paulista, 1000 - São Paulo/SP</TextContato>
                    </ContainerContato>
                </ContainerRight>
            </ContentFooter>

            <FooterAll>
                <TextFooter>© 2026 Raiden Seguros, 00.907.672/0001-91 - Todos os direitos reservados.<br />Desenvolvido por Vinícius Silva</TextFooter>
            </FooterAll>
        </ContainerFooter>
    )
}

export default Footer