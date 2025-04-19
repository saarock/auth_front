import protectedApi from "../instance/axiosProtectedInstance";

class ProductService {
    async addProduct(product) {
        try {
            const response = await protectedApi.post("/saveProduct", product, {
                headers: {
                    'Content-Type': 'multipart/form-data', // This is essential for sending files
                },
            });
            const data = await response.data;
            return data;
        } catch (error) {
            console.error("Error adding product:", error);
            throw new Error(error.response.data.message);
        }
    }


    async getProducts(currentPage, productsPerPage, searchQuery, categoryFilter, availabilityFilter, disabled) {
        try {

           
         
            const response = await protectedApi.get(`/getProducts?page=${currentPage}&limit=${productsPerPage}&search=${searchQuery}&categoryFilter=${categoryFilter}&availabilityFilter=${availabilityFilter}&disabled=${disabled}`);
          
            if (!response || !response.data) {
                throw new Error('Failed to fetch data from the server.');
            }
     
            const data = await response.data;
            return data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }
    

    async deleteProduct(id) {
        try {
            const response = await protectedApi.delete("/deleteProduct", {
                data: { id }
            });
            const data = await response.data;
            return data;
        } catch (error) {
            throw new Error(error.response.data.message);


        }

    }

    async toggleProductAvailability(id) {
        try {
            const response = await protectedApi.delete("/change-available", {
                data: { id }
            });
            const data = await response.data;
            return data;
        } catch (error) {
            throw new Error(error.response.data.message);

        }
    }

    async editProduct(productDetails) {
        try {

            const response = await protectedApi.put("/edit-product", { productDetails }
            );
            const data = await response.data;
            return data;
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message);

        }
    }
}


const productService = new ProductService();
export default productService;