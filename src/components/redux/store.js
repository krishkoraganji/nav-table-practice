import { legacy_createStore as createStore} from 'redux'

import { inputReducer } from './reducer'

const store=createStore(inputReducer)


export default store