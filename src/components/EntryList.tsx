import { useSelector, useDispatch } from 'react-redux';
import { removeEntry, updateExpression } from '../utils/calculatorSlice';
import Entry from './Entry';
import { RootState } from '../main';

const EntryList: React.FC = () => {
  const items = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {items?.map((item, index) => {
            return (
              <Entry
                key={item.id}
                {...item}
                remove={() => dispatch(removeEntry(index))}
                updateResult={() =>
                  dispatch(updateExpression(String(item.result)))
                }
                updateExpression={() =>
                  dispatch(updateExpression(item.expression))
                }
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EntryList;
