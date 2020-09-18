export type RecordsResponse ={
    content: RecordItem[];
    totalPages:number;

}

export type RecordItem = {
    id:number,
    name: string,
    moment:string,
    age:number,
    gameTitle: string,
    genreName:string,
    platform:Platform
}

export type Platform = 'XBOX'|'PC'|'PLAYSTATION';