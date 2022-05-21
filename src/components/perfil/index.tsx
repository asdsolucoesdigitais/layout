import StylePerfil from './Perfil.module.scss';
import Photo from './photo';

export default function Perfil() {
    return (
        <div className={StylePerfil.perfil}>
            <Photo />
        </div>
    )
}