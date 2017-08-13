// State argument is not aplicable state , 
//only the state thos reducer is responsible for


export default function(state = null ,action){
    switch(action.type){
        case 'BOOK_SELECTED':
        //always return fresh object
        return action.payload;
    }
return state
}