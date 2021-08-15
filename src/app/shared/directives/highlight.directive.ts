import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {

  private mouseenterListener: any;
  private mouseLeaveListener: any;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }  

  ngOnInit(): void {
    // this.element.nativeElement.classList.add('highlight');

    this.mouseenterListener = this.renderer.listen(
      this.element.nativeElement,
      'mouseenter',
      () => {
        this.renderer.addClass(this.element.nativeElement, 'highlight');
        
      }
    )

    this.mouseLeaveListener = this.renderer.listen(
      this.element.nativeElement,
      'mouseleave',
      () => {
        this.renderer.removeClass(this.element.nativeElement, 'highlight');
      }
    )
  }

  ngOnDestroy(): void {
    this.mouseenterListener();
    this.mouseLeaveListener();
  }
}
