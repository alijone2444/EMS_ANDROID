import { combineReducers } from 'redux';
import headerOptionReducer from './Reducers/headerOptionReducer';
import {
    userUpcomingEventsReducer,
    userHotEventsReducer,
    userRecentEventsReducer,
    userAllEventsReducer,
} from './Reducers/EventsUserReducer';
import SocietiesReducer from './Reducers/societiesDataReducer';
import IsAuthenticatedReducer from './Reducers/isAuthenticatedReducer';
// Combine multiple reducers into a root reducer
const rootReducer = combineReducers({
    headerOption: headerOptionReducer, // Add your headerOptionReducer under the key 'headerOption'
    // Add more reducers here if you have any
    userUpcomingEvents: userUpcomingEventsReducer,
    userHotEvents: userHotEventsReducer,
    userRecentEvents: userRecentEventsReducer,
    // Add other reducers here if you have more
    userAllEvents: userAllEventsReducer,
    IsAuthenticated: IsAuthenticatedReducer,
    SocietiesData: SocietiesReducer
});

export default rootReducer;
