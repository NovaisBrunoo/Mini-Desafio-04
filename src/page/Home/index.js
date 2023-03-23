import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { setItem } from '../../utils/storage';
import './style.css';

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
        console.log(form);
        try {
            const response = await api.post('/login', {
                email: form.email,
                senha: form.senha
            });

            console.log(response)
            setItem('token', response.data.token);
            navigate('/Main');
        } catch (error) {


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
                    <label htmlFor='email'></label>
                    <input
                        type='text'
                        name='email'
                        value={form.email}
                        onChange={(event) => handleChangeForm(event)}
                    />

                    <label htmlFor='senha'></label>
                    <input
                        type='password'
                        name='senha'
                        value={form.senha}
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