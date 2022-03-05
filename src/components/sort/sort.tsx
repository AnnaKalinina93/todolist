function Sort(): JSX.Element {
    return (
        <div className="sort__wrapper">
            <p className="sort-date-text">Sort date</p>
            <button className="button-increase">
                <img src="/img/arrow.png" className="img-add-date"
                    width="30"
                    height="30"
                    alt="arrow up" />
            </button>
            <button className="button-decrease">
                <img src="/img/arrow.png" className="img-add-date"
                    width="30"
                    height="30"
                    alt="arrow down" />
            </button>
        </div>
    );
}

export default Sort;