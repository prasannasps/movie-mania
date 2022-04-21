import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SharedService } from 'shared.service';

@Injectable({ providedIn: 'root' })
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private sharedService: SharedService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.sharedService.nextMessage(true);

        return next.handle(request).pipe(
            tap(
                (event) => {
                    if (event instanceof HttpResponse) {
                        this.sharedService.nextMessage(false);
                    }
                },
                (error: HttpErrorResponse) => {
                    this.sharedService.nextMessage(false);
                }
            )
        );
    }

}
