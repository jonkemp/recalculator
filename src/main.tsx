import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore, Middleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import calculatorReducer from './utils/calculatorSlice'
import './index.css'
import App from './App'
import { CalculateAppState } from './types'

// Create localStorage middleware
const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action)
    localStorage.setItem('recalculatorState', JSON.stringify(store.getState()))
    return result
}

// Load state from localStorage
const loadState = (): CalculateAppState | undefined => {
    try {
        const serializedState = localStorage.getItem('recalculatorState')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        console.error('Error loading state from localStorage:', err)
        return undefined
    }
}

const preloadedState = loadState()

const store = configureStore({
    reducer: calculatorReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
