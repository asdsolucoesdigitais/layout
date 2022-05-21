import StyleHome from "./Home.module.scss";
import Menu from "components/menu";

export default function Home() {
    return (
        <section>
            <div className={StyleHome.row}>
                <div className={StyleHome.box_perfil}>
                    <div className={StyleHome.perfil}>
                        <h1>
                            Perfil
                        </h1>
                    </div>
                </div>

                <div className={StyleHome.box_menu}>
                    <div className={StyleHome.menu}>
                        <Menu />
                    </div>
                </div>

                <div className={StyleHome.box_content}>
                    <div className={StyleHome.content}>
                        <h1>
                            Content
                        </h1>
                    </div>
                </div>
            </div>

        </section>
    );
}
