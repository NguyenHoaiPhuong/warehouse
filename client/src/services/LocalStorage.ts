import { IAuthToken } from './Auth'

class LocalStorageService {
    private static _service: LocalStorageService;

    public static getService(): LocalStorageService {
        if (!LocalStorageService._service) {
            LocalStorageService._service = new LocalStorageService();
        }

        return LocalStorageService._service;
    }

    public setToken(tokenObj: IAuthToken) {
        localStorage.setItem('access_token', tokenObj.access_token);
        localStorage.setItem('refresh_token', tokenObj.refresh_token);
    }

    public getAccessToken():string | null {
        return localStorage.getItem('access_token');
    }

    public getRefreshToken():string | null {
        return localStorage.getItem('refresh_token');
    }

    public clearToken() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }
}

export default LocalStorageService;