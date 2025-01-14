import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterVal } from '../model/selectors/getCounterVal/getCounterVal';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterVal);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};
