import './style.css';
import Vector from '../../assets/Vector.svg'
import { clear } from '../../utils/storage'
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    function handleclean() {
        clear()
        navigate('/')
    }

    return (
        <>
            <header>
                <strong>KONTACTS</strong>
                <div className='logOut'>
                    <button className='logout' onClick={() => handleclean()}><img src={Vector} alt="Logout" /></button>
                </div>
            </header>

        </>
    );

}