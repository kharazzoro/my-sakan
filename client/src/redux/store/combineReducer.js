import redux from 'redux';
import {combineReducers} from 'redux';
import flats from '../reducer/flat';
import SecondReducer from '../reducer/firstReducer'
import country from '../reducer/country'

export default combineReducers({
    flats,
    SecondReducer,
    country
})