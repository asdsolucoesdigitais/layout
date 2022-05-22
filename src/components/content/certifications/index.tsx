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
            certificateTitle: "Fundamentos de React: escrevendo com Typescript",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em abr de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/2b6ba0d1-bff4-4b1f-bb5d-52cb7a9fbd2b",
        },
        {
            id: 3,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "React: lidando com arquivos estáticos",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em abr de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/2632af1f-6016-4cd9-b60d-f8195d061ba2",
        },
        {
            id: 3,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQG9_uP8f-kpiw/company-logo_100_100/0/1519900745590?e=1661385600&v=beta&t=tNDYFmEcgEhYjiag9ipnN-hkT_IPecH2Ptd87jMgTD8",
            imgAlt: "SCRUMstudy - Accreditation Body for Scrum and Agile",
            certificateTitle: "Scrum Fundamentals Certified",
            certificateInstitution: "SCRUMstudy - Accreditation Body for Scrum and Agile",
            certificateIssueDate:
                "Emitido em abr de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-GuilhermeAmorim-909698.pdf",
        },
        {
            id: 4,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "TypeScript parte 1: evoluindo seu JavaScript",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em abr de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/ff31f6ee-6e9d-4af9-a7d4-d0b3b13dd75c",
        },
        {
            id: 5,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "TypeScript parte 2: avançando na linguagem",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em abr de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/95128a63-68f1-4dd7-ba83-9a65e4b56812",
        },
        {
            id: 6,
            imgSrc: "https://media-exp1.licdn.com/dms/image/C4E0BAQEHX7cfhFZv8w/company-logo_100_100/0/1638241687335?e=1661385600&v=beta&t=bbAcJg6oR4UlHEkIjUkwlMn9NFowLsgPzYSjlLnJzNI",
            imgAlt: "Alura",
            certificateTitle: "Typescript parte 3: mais técnicas e boas práticas",
            certificateInstitution: "Alura",
            certificateIssueDate:
                "Emitido em abr de 2022 · Sem data de expiração",
            certificateExternalLink:
                "https://cursos.alura.com.br/certificate/a9e70dce-ce17-49cf-bf3b-08e9a5efbe88",
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
