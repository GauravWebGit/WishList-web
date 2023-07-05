import { createStore,applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { WishlistReducer } from './Reducer/WishList.Reducer'
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage,

}

const persistedReducer = persistReducer(persistConfig, WishlistReducer)

export const configureStore = () => {
    const store =createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store)
    return { store, persistor };
}