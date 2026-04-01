import { Briefcase, Car, Clock, HeartPulse, House, MapPinnedIcon, MonitorSmartphoneIcon, Motorbike, PawPrintIcon } from 'lucide-react';
import { forwardRef, type JSX } from 'react';
import { Cardfeatures, Container, Sectionfeatures, Title } from './styles';

interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Beneficios = forwardRef<HTMLDivElement>((_props, ref) => {


    const features: ReadonlyArray<Feature> = [
        //ReadonlyArray significa que é um array imutável, apenas para leitura.
        {
            icon: <House />,
            title: "Seguro Residencial",
            description:
                "Proteja seu lar e sua família contra incêndios, roubos, danos elétricos e outros imprevistos.",
        },
        {
            icon: <MapPinnedIcon />,
            title: "Seguro Viagem ",
            description:
                "Cobertura completa para imprevistos durante suas viagens.",
        },
        {
            icon: <Briefcase />,
            title: "Seguro Empresarial",
            description:
                "Proteja seu negócio contra danos e responsabilidades.",
        },
        {
            icon: <HeartPulse />,
            title: "Seguro Saúde",
            description:
                "Cuidado completo para você e sua família, com cobertura médica e hospitalar personalizada.",
        },
        {
            icon: <Motorbike />,
            title: "Consórcio Moto",
            description:
                "Conquiste sua moto de forma planejada e acessível, com parcelas que cabem no seu bolso e sem juros."

        },
        {
            icon: <Car />,
            title: "Consórcio Auto",
            description:
                "Planeje a compra do seu carro novo com parcelas que cabem no seu bolso e sem juros.",
        },
        {
            icon: <Clock />,
            title: "Assistência 24h",
            description:
                "Suporte imediato para emergências em casa ou no carro.",
        },
        {
            icon: <MonitorSmartphoneIcon />,
            title: "Seguro Equipamentos",
            description:
                "Proteção para seus eletrônicos e aparelhos contra danos e roubos.",
        },
        {
            icon: <PawPrintIcon />,
            title: "Seguro Pet",
            description:
                "Cuidados e proteção para seu animal de estimação, incluindo assistência veterinária e emergências.",
        },
    ];


    return (
        <Container ref={ref}>
            <Title>Nossos Benefícios</Title>
            <Sectionfeatures>
                {features.map((feature) => (
                    <Cardfeatures key={feature.title}>
                        <h3>{feature.icon}</h3>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                    </Cardfeatures>
                ))}
            </Sectionfeatures>
        </Container>
    );
});

export default Beneficios;