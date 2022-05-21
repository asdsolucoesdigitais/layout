import StyleMenu from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUser,
    faSuitcase,
    faCertificate
} from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "react-external-link";

export default function Menu() {
    const menuIcons = [
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
