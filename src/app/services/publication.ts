export interface Multimedia{
    base: string,
    ext: string
}

export interface Publication {
    title: string,
    description: string,
    monetized:boolean,
    checkIn: string,
    checkOut: string,
    multimedia: Multimedia[] 
}