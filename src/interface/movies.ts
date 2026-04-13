import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default interface Movie {
    'adult': boolean,
    'id': number,
    'title' : string,
    'backdrop_path': string,
    'poster_path': string,
    'original_language': string,
    'original_title': string,
    'overview': string,
    'media_type': string,
    'genre_ids': string[],
    'popularity': number,
    'release_date': Date,
    'vote_average': Double,
    'vote_count': number,
}
