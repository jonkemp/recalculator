import { Button } from '@/components/ui/button'
import { Item } from '../types'

interface EntryProps extends Item {
    remove: () => void
    updateResult: () => void
    updateExpression: () => void
}

const Entry: React.FC<EntryProps> = ({
    result,
    expression,
    remove,
    updateResult,
    updateExpression,
}) => (
    <li className="mb-4">
        <div className="mb-2">{result}</div>
        <div className="mb-2">{expression}</div>
        <div className="grid grid-cols-3 gap-2">
            <Button
                className="btn btn-warning btn-xs"
                type="button"
                onClick={updateResult}
            >
                Use Result
            </Button>
            <Button
                className="btn btn-warning btn-xs"
                type="button"
                onClick={updateExpression}
            >
                Use Expression
            </Button>
            <Button
                className="btn btn-danger btn-xs"
                type="button"
                onClick={remove}
            >
                Remove
            </Button>
        </div>
    </li>
)

export default Entry
