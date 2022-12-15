import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRecargaMaps]'
})
export class RecargaMapsDirective  implements OnChanges{

@Input() appRecargaMaps !: number

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    this.viewContainerRef.createEmbeddedView(templateRef);
    }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appRecargaMaps']){
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);

    }
  }


}
