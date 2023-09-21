import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {RoutePaths} from "@/shares/config/router/routeConfig";
import {HTMLAttributes} from "react";
import {classNames} from "@/shares/lib/classNames";
import {Container} from "@/shares/ui/Container";

interface NotFoundPageProps extends HTMLAttributes<HTMLDivElement> {
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const {className, ...otherProps} = props;
    return (
        <div className={classNames(styles.root, className)} {...otherProps}>
            <Container>
                <h1>Страница не найдена</h1>
                <Link to={RoutePaths.main}>
                    На главную
                </Link>
            </Container>
        </div>
    );
};

export {NotFoundPage};