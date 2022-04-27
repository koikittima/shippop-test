import helper from "../utils/helper";

const Auth = {
    signOut() {
      localStorage.removeItem("token");
    },
    isAuth() {
      return localStorage.getItem("token");
    },
    isLoggedIn () {
        const login = helper.storageGet("login");
        if (login && Object.keys(login).length > 0) {
          return true;
        } else {
          return false;
        }
    }
};
export default Auth;