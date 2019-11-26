import { AuthState } from '../states/AuthState'

class LocalStorageService {
    private static _service: LocalStorageService;

    public static getService(): LocalStorageService {
        if (!LocalStorageService._service) {
            LocalStorageService._service = new LocalStorageService();
        }

        return LocalStorageService._service;
    }

    public setToken(tokenObj:AuthState) {
        localStorage.setItem('accessToken', tokenObj.accessToken);
        localStorage.setItem('refreshToken', tokenObj.refreshToken);
    }

    public getAccessToken():string | null {
        return localStorage.getItem('accessToken');
    }

    public getRefreshToken():string | null {
        return localStorage.getItem('refreshToken');
    }

    public clearToken() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
}

export default LocalStorageService;