import { Container, Content, Image, ItemFeature, Title } from "./styles";

import allianz from "../../assets/img/allianz-logo.webp";
import bradesco from "../../assets/img/bradesco-logo.webp";
import hdi from "../../assets/img/hdi-seguros-logo.webp";
import itau from "../../assets/img/itau-seguros-logo.webp";
import mitsui from "../../assets/img/mitsui-logo.webp";
import porto from "../../assets/img/porto-seguro-logo.webp";
import santander from "../../assets/img/santander-logo.webp";
import sicob from "../../assets/img/sicob-logo.png";
import tokio from "../../assets/img/tokio-marine-logo.webp";
import zurich from "../../assets/img/zurich-logo.webp";

interface Feature {
    image: string;
}

const features: ReadonlyArray<Feature> = [

    {
        image: allianz
    },
    {
        image: bradesco
    },

    {
        image: porto
    },
    {
        image: itau
    },
    {
        image: tokio
    },
    {
        image: hdi
    },
    {
        image: sicob
    },
    {
        image: santander
    },
    {
        image: mitsui
    },
    {
        image: zurich
    }

]

function Parceiros() {

    return (
        <Container>
            <Title>Nossos Parceiros</Title>
            <Content>
                {features.map((feature, index) => (
                    <ItemFeature key={index}>
                        <Image src={feature.image} alt={`Parceiro ${index + 1}`} />
                    </ItemFeature>
                ))}
            </Content>
        </Container>
    )
}

export default Parceiros;