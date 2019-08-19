import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit {
  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;
 constructor(private elem: ElementRef, private renderer: Renderer2) { }
 ngOnInit(): void {
  const shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur}`;
  this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
 }

}
