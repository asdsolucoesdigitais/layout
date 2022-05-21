import StyleHome from "./Home.module.scss";
import StyleMenu from "./Menu.module.scss";
import MenuExternal from "components/menu/external";
import Perfil from "components/perfil";
import { useState } from "react";
import Certifications from "components/content/certifications";
import About from "components/content/about";
import {
    faUser,
    faSuitcase,
    faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Experience from "components/content/experience";

export default function Home() {
    const [changeContent, setContent] = useState(<Certifications />);
    const menuIcons = [
        {
            id: 4,
            icon: faUser,
            link: <About />,
        },
        {
            id: 5,
            icon: faSuitcase,
            link: <Experience />,
        },
        {
            id: 6,
            icon: faCertificate,
            link: <Certifications />,
        },
    ];
    return (
        <section>
            <div className={StyleHome.row}>
                <div className={StyleHome.box_perfil}>
                    <div className={StyleHome.perfil}>
                        <Perfil />
                    </div>
                </div>

                <div className={StyleHome.box_menu}>
                    <div className={StyleHome.menu}>
                        <MenuExternal />
                        {menuIcons.map((icon) => (
                            <button
                                key={icon.id}
                                onClick={() => setContent(icon.link)}
                            >
                                <FontAwesomeIcon
                                    icon={icon.icon}
                                    className={StyleMenu.item}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className={StyleHome.box_content}>
                    <div className={StyleHome.content}>{changeContent}</div>
                </div>
            </div>
        </section>
    );
}
