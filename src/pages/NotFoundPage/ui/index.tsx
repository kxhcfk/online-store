import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {RoutePaths} from "@/shares/config/router/routeConfig";
import {Container} from "@/shares/ui/Container";
import {useTranslation} from "react-i18next";

const NotFoundPage = () => {
    const {t} = useTranslation("not_found");
    
    return (
        <div className={styles.root}>
            <Container>
                <h1>{t("Заголовок")}</h1>

                <Link to={RoutePaths.main}>
                    {t("Кнопка на главную")}
                </Link>
            </Container>
        </div>
    );
};

export {NotFoundPage};