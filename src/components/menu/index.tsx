import StyleMenu from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faWhatsapp,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { 
    faUser,
    faSuitcase,
    faCertificate
} from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

export default function Menu() {
    const menuIcons = [
        {
            id: 1,
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/guideoliveiraamorim/",
        },
        {
            id: 2,
            icon: faWhatsapp,
            link: "https://api.whatsapp.com/send?phone=5579991145680&text=Ol%C3%A1!%20Cheguei%20aqui%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!",
        },
        {
            id: 3,
            icon: faGithub,
            link: "https://github.com/GuilhermeDeOliveiraAmorim",
        },
        {
            id: 4,
            icon: faUser,
            link: "#",
        },
        {
            id: 5,
            icon: faSuitcase,
            link: "#",
        },
        {
            id: 6,
            icon: faCertificate,
            link: "#",
        },
    ];
    return (
        <>
            {menuIcons.map((icon) => (
                <ExternalLink key={icon.id} href={icon.link}>
                    <FontAwesomeIcon
                        icon={icon.icon}
                        className={StyleMenu.item}
                    />
                </ExternalLink>
            ))}
        </>
    );
}
