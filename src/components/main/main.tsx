import { useDispatch } from 'react-redux';
import { AppRoute } from '../../const';
import { redirectToRoute } from '../../store/middlewares/action';
import Header from '../common/header/header';

function Main(): JSX.Element {
    const dispatch = useDispatch();
    return (
        <div className="wrapper">
            <Header />
            <h1 className="title">ToDoList</h1>
            <p className="description">Manage You Task Checklist Easily</p>
            <div className="button__wrapper">
                <button
                    type="button"
                    className="buttonStart"
                    onClick={() => { dispatch(redirectToRoute(AppRoute.TodoList)) }}
                >
                    Lets Start
                </button>
            </div>
        </div>
    );
}

export default Main;