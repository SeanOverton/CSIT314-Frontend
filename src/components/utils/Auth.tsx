class Auth {
    login(cb: any, data: any){
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("username", JSON.stringify(data.username));
        localStorage.setItem("user_type", JSON.stringify(data.user_type));
        cb();
    }

    logout(cb: any){
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("user_type");
        cb();
    }

    isAuthenticated(){
        const userStr = localStorage.getItem("token");
        if (userStr) return true;

        return null;
    }

    isCustomer(){
        const userStr: any = localStorage.getItem("user_type");
        if (JSON.parse(userStr) == "customer") return true;

        return false;
    }

    isMechanic(){
        const userStr: any = localStorage.getItem("user_type");
        if (JSON.parse(userStr) == "mechanic") return true;

        return false;
    }
}

export default new Auth();