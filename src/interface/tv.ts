import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default interface Tv {
    'adult': boolean,
    'name' : string,
    'id': number,
    'backdrop_path': string,
    'poster_path': string,
    'original_language': string,
    'original_name': string,
    'overview': string,
    'media_type': string,
    'genre_ids': string[],
    'popularity': number,
    'release_date': Date,
    'vote_average': Double,
    'vote_count': number,
}
