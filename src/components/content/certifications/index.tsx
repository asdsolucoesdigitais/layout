import Certificate from "./certificate";
import StyleCertifications from "./Certifications.module.scss";

export default function Certifications() {
    const certifications = [
        {
            id: 1,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "React: conhecendo a biblioteca React Router",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em mai de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/debea904-b285-4566-a1c1-34acae617409",
        },
        {
            id: 2,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "React: conhecendo a biblioteca React Router",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em mai de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/debea904-b285-4566-a1c1-34acae617409",
        },
        {
            id: 3,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "React: conhecendo a biblioteca React Router",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em mai de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/debea904-b285-4566-a1c1-34acae617409",
        },
        {
            id: 3,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "React: conhecendo a biblioteca React Router",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em mai de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/debea904-b285-4566-a1c1-34acae617409",
        },
    ];
    return (
        <div className={StyleCertifications.certifications}>
            <h1>Licenças e certificados</h1>
            <div className={StyleCertifications.certifications_box}>
                {certifications.map((certificate) => (
                    <Certificate key={certificate.id} {...certificate} />
                ))}
            </div>
        </div>
    );
}
