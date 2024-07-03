import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DashboardAdmin = () => {
    const router = useRouter();
    const { id, token } = router.query;

    const [adminData, setAdminData] = useState(null);

    useEffect(() => {
        if (id && token) {
            fetch(`/administradores/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => setAdminData(data))
                .catch(error => console.error('Erro ao carregar dados do admin:', error));
        }
    }, [id, token]);

    return (
        <div>
            <h1>Dashboard Admin</h1>
            <p>Usuário ID: {id}</p>
            {adminData && (
                <div>
                    <p>Nome: {adminData.nome}</p>
                    <p>Email: {adminData.email}</p>
                </div>
            )}
        </div>
    );
};

export default DashboardAdmin;
