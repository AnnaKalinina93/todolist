import { useSelector } from 'react-redux';
import { getActivePage, getData, getDataError, getDataLoading } from '../../store/selectors';
import Header from '../common/header/header';
import DataItem from '../data-item/data-item';
import Loading from '../loading/loading';
import NewList from '../new-list/new-list';
import Pagination from '../pagination/pagination';
import Sort from '../sort/sort';
import Error from '../error/error';

function TodoList(): JSX.Element {
    const data = useSelector(getData);
    const dataLoading = useSelector(getDataLoading);
    const dataError = useSelector(getDataError);
    const activePage = useSelector(getActivePage);

    const PAGE_COUNT = Math.ceil(data.length / 15);
    return (
        <div className="wrapper">
            <Header />
            <h1 className="title">My ToDoList</h1>
            <NewList />
            <div className="border"></div>
            <Sort />
            {dataLoading && <Loading />}
            {!dataLoading && dataError && <Error />}
            <div className="todolist__wrapper">
                <ul className="todolist">
                    {data.slice().reverse().slice((activePage - 1) * 15, activePage * 15).map((item) => <DataItem item={item} key={`${item.id}-${item.userId}`} />)}
                </ul>
            </div>
            <Pagination pageCount={PAGE_COUNT} />
        </div>
    );
}

export default TodoList;
