import protectedApi from "../instance/axiosProtectedInstance";

class UserService {
    async getAllUsers(usersPerPage, currentPage) {
        try  {
            const response = await protectedApi.get(`/get-users?page=${currentPage}&limit=${usersPerPage}`);
            const data = await response.data;
            return data;
        } catch(error) {
            throw new Error(error.response.data.message);

        }
    }

    async updateUserStatus(userId, updatedStatus) {
        try {
            const response = await protectedApi.put(`/deactivate-activate-user`, {userId, updatedStatus});
            const data = await response.data;
            return data;
        } catch(error) {
            throw new Error(error.response.data.message);

        }
    }

}

const userService = new UserService();
export default userService;