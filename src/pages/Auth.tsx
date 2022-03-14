class Auth {
    login(cb: any){
        localStorage.setItem("user", JSON.stringify(true));
        cb();
    }

    logout(cb: any){
        localStorage.removeItem("user");
        cb();
    }

    isAuthenticated(){
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new Auth();