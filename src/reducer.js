
import { tracks } from './data/tracks';

export let initialValue = {
    like:null,
    all:null,
    disable:true,
    filterSong:[],
    tracks:tracks
}


export const reducer = (state = initialValue,action)=>{
    switch(action.type){
        case 'LIKE':{
            return {...state,like:!(action.payload)}
        }
        case 'ALL':{
            return {...state,all:!(action.payload)}
        }

        case 'DISABLE':{
            return {...state,disable:!(action.payload)}

        }

        case 'PLAY':{
            return {...state,play:!(action.payload)}

        }
        case 'SEARCH_PRODUCT':{
            console.log(action.payload);
            return { ...state, tracks: state.tracks.filter((e) => e.songName.includes(action.payload)) }

        }
        default:{
            return state
        }
    }
}