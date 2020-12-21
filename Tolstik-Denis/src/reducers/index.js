import { combineReducers } from 'redux';
import ChatsReducer from './ChatsReducer';
import PropfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
    chats: ChatsReducer,
    profile: PropfileReducer,
}); 

export default rootReducer;