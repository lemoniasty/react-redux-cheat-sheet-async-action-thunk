// Rules of Reducers:
//  * Must return any value besides 'undefined'
//  * Produces 'state', or data to be used inside of your app using only
//    previous state and the action (reducers are pure / isolated / self scope).
//  * Must not return reach 'out of itself' to decide what value to return
//  * Must not mutate its input 'state' argument

export default () => {
    // Mutating states in reducers for objects and arrays
    // Arrays
    //              TYPE                           BAD                               GOOD
    //  Removing an element from an array      state.pop()          state.filter(element => element !== 'hi')
    //  Adding an element to an array          state.push('hi')                 [...state, 'hi']
    //  Replacing an element in an array       state[0] = 'hi'      state.map(el => el === 'hi' ? 'bye' : el)
    //
    //
    // Objects
    //  Updating a property in an object       state.name = 'Sam'           {...state, name: 'Sam'}
    //  Adding a property to an object         state.age = 30               {...state, age: 30}
    //  Removing a property from an array      delete state.name  {...state, age: undefined} or _.omit(state, 'age')
};