import Product from "../models/Product";

const ProductService = {
    getProducts: () => [
        new Product(1, "Sunset Canvas", "$50", "https://via.placeholder.com/150"),
        new Product(2, "Mountain Canvas", "$75", "https://via.placeholder.com/150"),
        new Product(3, "Abstract Art Canvas", "$100", "https://via.placeholder.com/150"),
        new Product(4, "Ocean Canvas", "$65", "https://via.placeholder.com/150"),
    ],
};

export default ProductService;
