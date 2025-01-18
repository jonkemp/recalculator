import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    addEntry,
    updateResult,
    updateExpression,
} from '../utils/calculatorSlice';
import { RootState } from '../main';

const EntryForm: React.FC = () => {
    const result = useSelector((state: RootState) => state.lastResult);
    const expression = useSelector((state: RootState) => state.lastExpression);
    const dispatch = useDispatch();

    const updateResultValue = useCallback(
        (expression: string) => {
            let value;
            try {
                value = expression !== '' ? eval(expression) : 0;
                dispatch(updateResult(value));
            } catch (err) {
                console.error('Error evaluating expression:', err);
            }
        },
        [dispatch]
    );

    useEffect(() => {
        updateResultValue(expression);
    }, [expression, updateResultValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateExpression(event.target.value));
        updateResultValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addEntry(expression));
        dispatch(updateExpression(''));
    };

    const handleUpdateExpression = () => {
        dispatch(updateExpression(String(result)));
    };
    return (
        <div className="row mb-3">
            <div className="col">
                <h1 className="mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {result}{' '}
                    <Button
                        className="inline-block align-middle"
                        type="button"
                        onClick={handleUpdateExpression}
                    >
                        ↓
                    </Button>
                </h1>
                <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="input-group mr-sm-2 mb-2">
                        <Input
                            type="text"
                            value={expression}
                            onChange={handleChange}
                        />
                    </div>
                    <Button className="btn btn-primary mb-2" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default EntryForm;
