export interface Multimedia{
    base: string,
    ext: string
}

export interface Publication {
    title: string,
    description: string,
    multimedia: Multimedia[] 
}