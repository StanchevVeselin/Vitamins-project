import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
         next: HttpHandler
            ): Observable<HttpEvent<any>> {
                console.log(req);
                
                return next.handle(req)
    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
}