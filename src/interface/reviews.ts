export interface AuthorDetails {
    name: string,
    username: string,
    avatar_path: string | null,
    rating:string | null,
}

export interface Results {
    author: string,
    author_details: AuthorDetails,
    content: string,
    created_at: string,
    id:number,
    updated_at:string,
}

export interface Review {
    id: number,
    page: number,
    results: Results[],
}