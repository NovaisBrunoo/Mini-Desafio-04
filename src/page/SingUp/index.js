import './style.css';
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';
import api from '../../api/api';

export default function SignUp() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
    })
    function handleChangeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    function clerForm() {
        setForm(
            {
                nome: '',
                email: '',
                senha: '',
            }
        )
    }
    async function handleSubmit(event) {
        event.preventDefault()
        try {
            if (!form.email || !form.senha || !form.nome) {
                console.log("Preencha todos os campos!");
                return;
            }

            const response = await api.post('/usuario', {
                nome: form.nome,
                email: form.email,
                senha: form.senha
            });

            if (response.status === 201) {
                console.log('usuario cadastrado')
                clerForm();
            }
            navigate('/');
        } catch (error) {
        }
    }
    return (
        <div className="container">
            <div className="img-direita">
            </div>
            <div className="cadastro">
                <strong>Cadastre-se</strong>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='nome'
                        value={form.nome}
                        onChange={(e) => handleChangeForm(e)}
                    />
                    <input
                        type='text'
                        name='email'
                        value={form.email}
                        onChange={(e) => handleChangeForm(e)}
                    />
                    <input
                        type='password'
                        name='senha'
                        value={form.senha}
                        onChange={(e) => handleChangeForm(e)}
                    />
                    <button className="cadastrar">cadastrar</button>

                </form>
                <Link to="/"><button className="cancelar">cancelar</button></Link>

                <div className="japossuei">
                    <span style={{ fontWeight: 'bold' }}>Já tem cadastro? <Link to="/">Clique aqui!</Link></span>
                </div>
            </div>
        </div>

    );
}
