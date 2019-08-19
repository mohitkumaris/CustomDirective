import { Directive, ElementRef, Input, Renderer2, OnInit, AfterViewInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnChanges {


  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;
 constructor(private elem: ElementRef, private renderer: Renderer2) { }

ngOnChanges(changes: import ('@angular/core').SimpleChanges): void {
  const shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur}`;
  this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
}

}
