import StyleHome from "./Home.module.scss";
import Menu from "components/menu";

export default function Home() {
    return (
        <section>
            <div className={StyleHome.row}>
                <div className={StyleHome.box_3}>
                    <div className={StyleHome.perfil}>
                        <h1>
                            Perfil
                        </h1>
                    </div>
                </div>

                <div className={StyleHome.box_1}>
                    <div className={StyleHome.menu}>
                        <Menu />
                    </div>
                </div>

                <div className={StyleHome.box_8}>
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
