import './style.css';
import Vector from '../../assets/Vector.svg'


export default function Header() {
    return (
        <>
            <header>
                <strong>KONTACTS</strong>
                <div className='logOut'>
                    <button><img src={Vector} alt="Logout" /></button>
                </div>
            </header>

        </>
    );

}