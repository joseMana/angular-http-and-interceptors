import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './features/component/directives-demo/directives-demo.component';
import { FormsDemoComponent } from './features/component/forms-demo/forms-demo.component';
import { ServicesDemoComponent } from './features/component/services-demo/services-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/custom-directives', pathMatch: 'full' },
  { path: 'custom-directives', component: DirectivesDemoComponent },
  { path: 'forms', component: FormsDemoComponent },
  { path: 'services', component: ServicesDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
