import { Directive,Input,OnChanges,SimpleChanges,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRecargaUsuario]'
})
export class RecargaUsuarioDirective implements OnChanges {
  @Input() appRecargaUsuario !: number;

  constructor(private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef)
    {
      this.viewContainerRef.createEmbeddedView( templateRef );
     }

     ngOnChanges(changes: SimpleChanges): void {
       if ( changes['appRecargaUsuario'])
       {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef);
       }
     }
}
