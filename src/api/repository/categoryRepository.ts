import Category, {ICategory} from '../../data/models/category'


export const getAllCategory = async (): Promise<ICategory[]> => {
    return await Category.find();
};


export const createCategory = async (ca: ICategory): Promise<ICategory> =>{
    const category = new Category(ca);

    return await Category.create(category);
}

export const deleteCategorys = async (ids: string[]): Promise<{ deletedCount: number }>=>{
    return await Category.deleteMany({categoryID : {$in : ids}});
}