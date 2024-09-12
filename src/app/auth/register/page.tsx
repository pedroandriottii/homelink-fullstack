import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const router = useRouter();

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, phone }),
            });

            if (response.ok) {
                setSuccess(true);
                alert('Cadastro realizado com sucesso!');
                router.push('/login');
            } else {
                const data = await response.json();
                if (response.status === 409) {
                    setError(data.message);
                } else {
                    setError('Erro ao realizar o cadastro. Tente novamente.');
                }
            }
        } catch (err) {
            setError('Ocorreu um erro. Tente novamente.');
        }
    };

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
                {error && <p>{error}</p>}
                {success && <p>Cadastro realizado com sucesso!</p>}
            </form>
        </div>
    );
}
