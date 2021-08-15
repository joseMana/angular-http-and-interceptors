import { Input } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {

  @Input() appHighlight2: string = '';

  constructor() { }

  @HostBinding('class') className = '';

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHighlight2 === 'blue') {
      this.className = 'highlight-blue';
    } else if (this.appHighlight2 === 'green') {
      this.className = 'highlight-green';
    } else {
      this.className = 'highlight';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.className = '';
  }
}
