import {SET_ADDRESS,SET_COORDINATES, UPDATE_COORDINATES} from '../Actions/Location'

const initialState = {
    latitude : null,
    longitude : null,
    address : ''
}

const reducer = (state = initialState , action)=>{
    switch(action.type)
    {
        case SET_COORDINATES:
            return{
                ...state,
                latitude : action.locationData.latitude,
                longitude : action.locationData.longitude           
            }
        case UPDATE_COORDINATES:
            return{
                ...state,
                latitude : action.updatedLocationData.latitude,
                longitude : action.updatedLocationData.longitude,
            }

        case SET_ADDRESS:
            return{
                ...state,
                address : action.address
            } 
        
        default :
            return state
    }
}

export default reducer