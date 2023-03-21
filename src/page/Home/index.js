import './style.css';
import api from '../../api/api'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { setItem } from '../../utils/storage';

export default function Home() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        senha: '',
    })
    function handleChangeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    async function handleForm(event) {
        event.preventDefault()
        try {
            const response = await api.post('/login', {
                email: form.email,
                senha: form.senha
            });
            const { token, usuario } = response.data;
            setItem('token', token);
            setItem('userName', usuario.nome)
            setItem('userId', usuario.id);
            navigate('/Main');
        } catch (error) {
            console.log(error);
            alert(error)

        }
    }
    return (
        <div className="container">
            <div className="img-esquerda">
            </div>

            <div className="login">
                <span>Bem vindo</span>

                <h2>Faça o login com sua conta</h2>

                <form onSubmit={handleForm}>
                    <input
                        type='text'
                        name='email'
                        value={form.email}
                        onChange={(event) => handleChangeForm(event)}
                    />
                    <input
                        type='password'
                        name='senha'
                        value={form.password}
                        onChange={(event) => handleChangeForm(event)}
                    />
                    <strong></strong>
                    <button>login</button>

                </form>
                <div className="cadastro">
                    <span>Não tem cadastro? <Link to='/SingUp'>Clique aqui!</Link></span>
                </div>
            </div>
        </div>
    )
}