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


    async buyProducts(products) {
        try {
            const response = await protectedApi.post(`/buy-products`, products);
            const data = await response.data;
            return data;
        } catch (error) {
            throw new Error(error.response.data.message);

        }
    }

    async getPurchaseStats(userId) {
        try {
            const response = await protectedApi.get(`/get-purchaseStats?userId=${userId}`);
            const data = await response.data;
            console.log("hah")
            console.log(data)
            return data;
        } catch (error) {
            throw new Error(error.response.data.message);

        }
    }

   async getBookedProduct(
    page,
    limit,
    status,
    search,
    id
   ) {
        try  {
            const response = await protectedApi.get(`/manage-booked-product?page=${page}&limit=${limit}
                &status=${status}&search=${search}&id=${id}
                `);
            const data = await response.data;
            return data;
        
        } catch (error) {
            throw new Error(error.response.data.message);

        }
    }

    async updateProductStatus(productId, newStatus) {
        try {
            const response = await protectedApi.post(`/change-status-of-booked-items`, {productId, newStatus});
            const data = await response.data;
            return data;
        } catch(error) {

        }

    }
    async generateBill(userId,status) {
        try {
            const response = await protectedApi.get(`/generate-bill?userId=${userId}&status=${status}`);
            const data = await response.data;
            return data;
       

        } catch(error) {
            throw new Error(error.message);
        }
    }

}


const productService = new ProductService();
export default productService;