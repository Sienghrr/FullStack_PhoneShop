import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem("token") || '';
        let tokenizerRep = req.clone({
            setHeaders:{
                Authorization: token
            }
        });
        return next.handle(tokenizerRep);
        /*let token = localStorage.getItem("token")!;
        if(token){
        let tokenizerRep = req.clone({
            setHeaders:{
                Authorization: token
            }
        });
        return next.handle(tokenizerRep); 
        }
        return next.handle(req);
        */
    }

}