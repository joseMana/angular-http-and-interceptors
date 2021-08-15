import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './features/component/directives-demo/directives-demo.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { Highlight2Directive } from './shared/directives/highlight2.directive';
import { IsAuthorizedDirective } from './shared/directives/is-authorized.directive';
import { FormsDemoComponent } from './features/component/forms-demo/forms-demo.component';
import { FormsModule } from '@angular/forms';
import { ServicesDemoComponent } from './features/component/services-demo/services-demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './core/interceptors/noop.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { MockInterceptor } from './core/interceptors/mock.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HighlightDirective,
    Highlight2Directive,
    IsAuthorizedDirective,
    FormsDemoComponent,
    ServicesDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
