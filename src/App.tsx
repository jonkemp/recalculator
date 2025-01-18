import EntryForm from './components/EntryForm'
import EntryList from './components/EntryList'

const App: React.FC = () => (
    <div className="mx-auto w-full px-[15px]">
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Recalculator
        </h3>
        <EntryForm />
        <EntryList />
    </div>
)

export default App
