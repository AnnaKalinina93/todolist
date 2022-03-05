import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
    return (
        <div className="wrapper">
            <h1 className="title">404. Page not found</h1>
            <p className="description">
                <Link to={AppRoute.Main}>Вернуться на главную</Link>
            </p>
        </div>
    );
}
export default NotFoundScreen;