import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataChange, dataRemoval } from '../../store/action';
import { Data } from '../../types/data';
import { useDebouncedCallback } from 'use-debounce';

type DataItemProps = {
    item: Data,
}

function DataItem({ item }: DataItemProps): JSX.Element {

    const dispatch = useDispatch();
    const [itemState, setItemState] = useState({
        userId: item.userId,
        id: item.id,
        title: item.title,
        completed: item.completed,
    });

    const debouncedInputChange = useDebouncedCallback((itemChange: Data) => {
        dispatch(dataChange(itemChange));
    }, 500);

    const handleDeleteButton = () => {
        dispatch(dataRemoval(itemState))
    }

    const handleChangeCheckbox = () => {
        setItemState({
            ...itemState,
            completed: !itemState.completed,
        });
        dispatch(dataChange(itemState));
    }

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setItemState({
            ...itemState,
            title: target.value,
        });
        debouncedInputChange(itemState);
    }

    return (
        <li className="todolist-item">
            <button className="button-frame"
                onClick={handleDeleteButton}>
                <img src="/img/frame.png"
                    width="30"
                    height="30"
                    alt="frame" />
            </button>
            <input type="checkbox"
                className="checkbox-item"
                checked={itemState.completed}
                onChange={handleChangeCheckbox}
            />
            <input type="text"
                value={itemState.title}
                className="input-item"
                onChange={handleInputChange} />
        </li>
    );
}

export default DataItem;