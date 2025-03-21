

export interface Product {
    id: number,
    name: string,
    price: number,
    stock: number,
    images: [],   
    categoryId: number,
    categorySeason: string,
    categoryType: string, // Foreign key for Category
}
