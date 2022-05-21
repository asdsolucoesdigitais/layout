import StylePerfil from './Perfil.module.scss';
import Credentials from './credentials';
import Photo from './photo';

export default function Perfil() {
    return (
        <div className={StylePerfil.perfil}>
            <Photo />
            <Credentials />
        </div>
    )
}