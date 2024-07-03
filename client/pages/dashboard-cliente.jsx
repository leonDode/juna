import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DashboardCliente = () => {
    const router = useRouter();
    const { id, token } = router.query; // Captura o token da query string
    const [clienteData, setClienteData] = useState(null);

    useEffect(() => {
        if (id && token) {
            // Lógica de carregamento de dados usando o id do usuário e token
            fetch(`/api/cliente/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => setClienteData(data))
                .catch(error => console.error('Erro ao carregar dados do cliente:', error));
        }
    }, [id, token]);

    return (
        <div>
            <h1>Dashboard Cliente</h1>
            <p>Usuário ID: {id}</p>
            {clienteData && (
                <div>
                    <p>Nome: {clienteData.nome}</p>
                    <p>Email: {clienteData.email}</p>
                    {/* Renderize outros dados do cliente aqui */}
                </div>
            )}
        </div>
    );
};

export default DashboardCliente;
