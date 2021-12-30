import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MockHttpInterceptor } from "./mockHttpInterceptor";

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MockHttpInterceptor, multi: true },
  ];