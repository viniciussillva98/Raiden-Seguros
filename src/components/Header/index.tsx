import { TextAlignJustify } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/LogoRaiden.png";
import { Buttons, Container, IconButton, Nav, Ul } from "./styles";


type HeaderProps = {
    onNavigate: (section: string) => void;
};

function Header({ onNavigate }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Referência para o UL do menu -Adicionar a referenci na ul do menu para verificar se o clique foi fora do menu
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Se o menu estiver aberto e o clique for fora do menu, fechar o menu
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }

        // Adiciona o listener no documento
        document.addEventListener("mousedown", handleClickOutside);

        // Remove o listener ao desmontar o componente
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]); // Re-executa o efeito quando isMenuOpen mudar

    return (
        <Container>

            <img src={logo} alt="Logo" />

            <Nav>
                <Buttons onClick={() => onNavigate('inicio')}>Início</Buttons>
                <Buttons onClick={() => onNavigate('beneficios')}>Benefícios</Buttons>
                <Buttons onClick={() => onNavigate('sobre')}>Sobre</Buttons>
                <Buttons onClick={() => onNavigate('contato')}>Contato</Buttons>
            </Nav>
            <IconButton>
                <TextAlignJustify onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </IconButton>

            {isMenuOpen && (
                <Ul ref={menuRef}>
                    <li onClick={() => { onNavigate('inicio'); setIsMenuOpen(!isMenuOpen); }}>Início</li>
                    <li onClick={() => { onNavigate('beneficios'); setIsMenuOpen(!isMenuOpen); }}>Benefícios</li>
                    <li onClick={() => { onNavigate('sobre'); setIsMenuOpen(!isMenuOpen); }}>Sobre</li>
                    <li onClick={() => { onNavigate('contato'); setIsMenuOpen(!isMenuOpen); }}>Contato</li>
                </Ul>
            )}

        </Container>
    );
}
export default Header;