import StyleHome from "./Home.module.scss";

export default function Home() {
    return (
        <section>
            <div className={StyleHome.row}>
                <div className={StyleHome.col_3}>
                    <div className={StyleHome.perfil}>
                        <h1>
                            Perfil
                        </h1>
                    </div>
                </div>

                <div className={StyleHome.col_1}>
                    <div className={StyleHome.menu}>
                        <ul>
                            <li>
                                A
                            </li>
                            <li>
                                A
                            </li>
                            <li>
                                A
                            </li>
                            <li>
                                A
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={StyleHome.col_8}>
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
