import StyleCertifications from "./Certifications.module.scss";
import alura from "assets/1638241687335.jpg";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Certifications() {
    return (
        <div className={StyleCertifications.certifications}>
            <h1>Licenças e certificados</h1>
            <div className={StyleCertifications.certifications_box}>
                <div className={StyleCertifications.card}>
                    <img
                        src={alura}
                        alt="Alura"
                        className={StyleCertifications.photo}
                    />
                    <div className={StyleCertifications.info}>
                        <div>
                            <h2>React: conhecendo a biblioteca React Router</h2>
                            <p>Alura</p>
                            <p>Emitido em mai de 2022 · Sem data de expiração</p>
                        </div>
                    </div>
                    <ExternalLink
                        className={StyleCertifications.link}
                        href="https://cursos.alura.com.br/certificate/debea904-b285-4566-a1c1-34acae617409"
                    >
                        <FontAwesomeIcon
                            icon={faEye}
                            className={StyleCertifications.link_icon}
                        />
                    </ExternalLink>
                </div>
                <div className={StyleCertifications.card}>
                    <img
                        src={alura}
                        alt="Alura"
                        className={StyleCertifications.photo}
                    />
                    <div>
                        <h2>React: conhecendo a biblioteca React Router</h2>
                        <p>Alura</p>
                        <span>
                            Emitido em mai de 2022 · Sem data de expiração
                        </span>
                    </div>
                    <ExternalLink href="https://cursos.alura.com.br/certificate/debea904-b285-4566-a1c1-34acae617409">
                        Ver
                    </ExternalLink>
                </div>
                <div className={StyleCertifications.card}>
                    <img
                        src={alura}
                        alt="Alura"
                        className={StyleCertifications.photo}
                    />
                    <div>
                        <h2>React: conhecendo a biblioteca React Router</h2>
                        <p>Alura</p>
                        <span>
                            Emitido em mai de 2022 · Sem data de expiração
                        </span>
                    </div>
                    <ExternalLink href="https://cursos.alura.com.br/certificate/debea904-b285-4566-a1c1-34acae617409">
                        Ver
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
}
