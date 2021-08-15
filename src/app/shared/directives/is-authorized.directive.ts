import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsAuthorized]'
})
export class IsAuthorizedDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) { }

  private isAuthorized = true;

  ngOnInit(): void {
    if (this.isAuthorized) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else {
      this.vcr.clear();
    }
  }



}
