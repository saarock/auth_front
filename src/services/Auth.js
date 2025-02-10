import api from "../instance/axiosInstance";
import protectedApi from "../instance/axiosProtectedInstance";

class Auth {

    static async login(userLoginFormDetails) {
        try {
            console.log("Login user");
            
            const response = await api.post("/login", userLoginFormDetails);
            const data = response.data;
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async logout(user) {
        try {
            console.log(user);

            const response = await protectedApi.post("/logout", user);
            const data = response.data;
            return data;
        } catch (error) {
            throw new Error(error.message);
        }

    }

    static async register(userFromData) {
        try {
            const response = await api.post("/register", userFromData);
            const data = await response.data;
            return data;
        } catch (error) {
            throw new Error(error);
        }

    }

    static async verifyAccessToken(accessToken) {
        try {
            const response = await api.post("/verifyAccessToken", { accessToken });
            const data = response.data;
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async verifyRefreshTokenAndgetNewAccessToken(refreshToken) {

    }


    static async sendMail(to) {
        try {
            const response = await api.post("/send_mail", { email: to });
            const data = response.data;
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }


    static async verifyMail(otbObj) {
        try {
            const response = await api.post("/mail_verify", otbObj);
            const data = response.data;
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async verify() {
        try {
            const response = await protectedApi.post("/verifyToken");
            const data = response.data;
            console.log(data);

            return data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }
}

export default Auth;