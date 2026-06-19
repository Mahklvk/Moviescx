import Genre from "./genre"

export default interface MovieDetail{
    backdrop_path: string,
    belongs_to_collection: object,
    budget: number,
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_company: object[],
    production_countries: object[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_language: object,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    genres: Genre[]
}