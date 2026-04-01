import { useRef } from 'react';
import Header from '../../components/Header';
import Beneficios from '../Beneficios';
import Inicio from '../Inicio';

import Footer from '../../components/Footer';
import Parceiros from '../../components/Parceiros';
import WhatsappLink from '../../components/WhatsAppLink';
import Contato from '../Contato';
import Sobre from '../Sobre';

export default function Home() {
    const inicioRef = useRef<HTMLDivElement>(null);
    const beneficiosRef = useRef<HTMLDivElement>(null);
    const sobreRef = useRef<HTMLDivElement>(null);
    const contatoRef = useRef<HTMLDivElement>(null);

    const handleNavigate = (section: string) => {
        switch (section) {
            case 'inicio':
                inicioRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'beneficios':
                beneficiosRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'sobre':
                sobreRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contato':
                contatoRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Header onNavigate={handleNavigate} />
            <>
                <Inicio onNavigate={handleNavigate} ref={inicioRef} />
                <Beneficios ref={beneficiosRef} />
                <Sobre ref={sobreRef} />
                <Parceiros />
                <Contato onNavigate={handleNavigate} ref={contatoRef} />
                <WhatsappLink />
                <Footer />
            </>
        </>
    );
}