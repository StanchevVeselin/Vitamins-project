export interface Product {
    
        _ownerId: string,
        title: string,
        description: string,
        price: number,
        img: string,
        _createdOn: string,
        _id: string,
        comments: {
                content:string,
                username: string,
                _createdOn:string,
                _id: string,
                _ownerId:string
        }
}

interface Commments {
        content:string,
        username: string,
        _createdOn:string,
        _id: string,
        _ownerId:string
}

