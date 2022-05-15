import StyleHome from "./Home.module.scss";

export default function Home() {
    return (
        <section className={StyleHome.l_home}>
            <div className={StyleHome.l_perfil}>l_perfil</div>
            <div className={StyleHome.l_menu}>l_menu</div>
            <div className={StyleHome.l_content}>l_content</div>
        </section>
    );
}
