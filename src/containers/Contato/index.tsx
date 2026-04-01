import { forwardRef, useState } from 'react';
import { Button, Container, ContentForm, Input, SubTitle, TextArea, Title } from './styles';


type NavegarProps = {
    onNavigate: (section: string) => void;
};

// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Contato = forwardRef<HTMLDivElement, NavegarProps>(({ onNavigate }, ref) => {

    const [name, setName] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>('')


    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/7R71ZvT-SBV", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, telefone, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setSuccess(true);
                    setError('');
                    setTimeout(() => {
                        onNavigate('inicio');
                        setName('');
                        setTelefone('');
                        setEmail('');
                        setMessage('');
                        setSuccess(false);
                    }, 5000);
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
            });
    }
    return (
        <Container ref={ref}>
            <Title>Solicite uma Cotação</Title>
            <SubTitle>Preencha o formulário abaixo e receba sua cotação de seguro gratuita em até 24 horas.</SubTitle>

            <ContentForm onSubmit={(e) => onSubmit(e)}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Nome" />
                <Input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} id="telefone" placeholder="Telefone" />
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" />
                <TextArea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Mensagem" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>Cotação enviada com sucesso!<br /> Em breve entraremos em contato.</p>}
                <Button type="submit">Enviar Cotação</Button>
            </ContentForm>
        </Container>
    );
});

export default Contato;