import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activePageChange, dataAddition } from '../../store/action';
import { getData } from '../../store/selectors';

function NewList(): JSX.Element {
    const data = useSelector(getData);
    const [inputState, setInputState] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputState(target.value);
    }

    const handleButtonClick = () => {
        const id = data.length + 1;
        let userId = data[data.length - 1].userId;
        userId = userId + 1;

        dispatch(dataAddition({
            userId,
            id,
            title: inputState,
            completed: false,
        }))
        setInputState('');
        dispatch(activePageChange(1));
    }

    return (
        <div className="new-list__wrapper">
            <input className="new-list__input"
                type="text"
                placeholder="Add new .."
                value={inputState}
                onChange={handleInputChange} />
            <button className="button-add-date">
                <img src="/img/kalendar.png" className="img-add-date"
                    width="30"
                    height="30"
                    alt="kalendar" />
            </button>
            <button type="button"
                className="button-add"
                onClick={handleButtonClick} >Add</button>
        </div>
    );
}

export default NewList;