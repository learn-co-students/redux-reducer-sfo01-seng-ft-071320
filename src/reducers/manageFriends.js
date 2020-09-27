export function manageFriends(state = {friends: []}, action){

    switch(action.type){
        case 'ADD_FRIEND':
          return ({...state,
            friends: [
                ...state.friends, 
                action.friend
            ]
        })

        case 'REMOVE_FRIEND':
            const friendIndex = state.friends.findIndex(friendID => friendID.id === action.id)
            return ({
                ...state,
                friends: [
                    ...state.friends.slice(0, friendIndex),
                    ...state.friends.slice(friendIndex + 1)
                ]
            })
        default:
            return state
    }

    // When removing a friend, instead of an object, the action will include an id key with an integer. Find the friend with the matching id and remove them. Thought of in another way, the reducer is really returning a new state with an array of friends that includes everyone except the removed friend.

}


// In manageFriends.js, write a function called manageFriends that takes in the previous state and an action as its argument. Here, the initial state should be an object with a key, friends, set to an empty array.
//  When our reducer receives "ADD_FRIEND", it should return a new state with this friend object added to the friends array.




