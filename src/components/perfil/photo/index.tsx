import StylePhoto from './Photo.module.scss';
import logo from 'assets/photo.jpg';

export default function Photo() {
    return (
        <img src={logo} alt="Guilherme Amorim" className={StylePhoto.photo} />
    )
}