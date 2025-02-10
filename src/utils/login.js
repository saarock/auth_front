const signIn = async (userLoginFormData) => {
    e.preventDefault();
    console.log(userLoginFormData);

    try {
      const response = await handleResponse(Auth.login(userLoginFormData));
      if (response.error) {
        return;
      }

      const { refreshToken, accessToken, userWithoutSensativeData } = response.data;

      Cookie.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, 1);
      Cookie.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken, 10);
      LocalStorage.setItem("userData", userWithoutSensativeData);


      const user = { token: accessToken, ...userWithoutSensativeData };

      dispatch(login(user));


    } catch (error) {
      console.log(error.message);

    }

  }

  export default signIn;