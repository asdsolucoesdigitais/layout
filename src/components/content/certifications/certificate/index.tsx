import StyleCertifications from "./Certifications.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

interface IProps {
    imgSrc: string;
    imgAlt: string;
    certificateTitle: string;
    certificateInstitution: string;
    certificateIssueDate: string;
    certificateExternalLink: string;
}

export default function Certificate(props: IProps) {
    const {
        imgSrc,
        imgAlt,
        certificateTitle,
        certificateInstitution,
        certificateIssueDate,
        certificateExternalLink,
    } = props;
    return (
        <div>
            <div className={StyleCertifications.card}>
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className={StyleCertifications.photo}
                />
                <div className={StyleCertifications.info}>
                    <div>
                        <h2>{certificateTitle}</h2>
                        <p>{certificateInstitution}</p>
                        <p>{certificateIssueDate}</p>
                    </div>
                </div>
                <ExternalLink
                    className={StyleCertifications.link}
                    href={certificateExternalLink}
                >
                    <FontAwesomeIcon
                        icon={faEye}
                        className={StyleCertifications.link_icon}
                    />
                </ExternalLink>
            </div>
        </div>
    );
}
