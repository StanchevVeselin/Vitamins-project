import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

const {apiUrlUsers} = environment

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    api = "/users"
    intercept(
        req: HttpRequest<any>,
         next: HttpHandler
            ): Observable<HttpEvent<any>> {
                if(req.url.startsWith(this.api)) {
                    req = req.clone({
                        url: req.url.replace(this.api, apiUrlUsers),
                        withCredentials: true
                    })
                }
                console.log(req);
                return next.handle(req)
    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
}