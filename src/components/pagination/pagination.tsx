
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { activePageChange } from "../../store/action";
import { getActivePage } from "../../store/selectors";

type PaginationProps = {
    pageCount: number,
}

function Pagination({ pageCount }: PaginationProps): JSX.Element {
    const activePage = useSelector(getActivePage);
    const dispatch = useDispatch();
    const paginationPages = Array.from({ length: pageCount }, (_, i) => i + 1);

    const handleChangePage = (page: number) => {
        dispatch(activePageChange(page));
    };

    if (!pageCount) {
        return (
            <div className="pagination"></div>
        );
    }
    return (
        <div className="pagination">
            <ul className="pagination__list">
                {paginationPages.map((page) => (
                    <li className="pagination__item" key={page}>
                        <a className={page !== activePage ? "pagination__link" : "pagination__link pagination__link-active"}
                            onClick={() => handleChangePage(page)}
                        >{page}</a>
                    </li>))}
            </ul>
        </div>
    );
}

export default Pagination;