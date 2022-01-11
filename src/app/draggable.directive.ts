import { Directive, Input, ElementRef} from '@angular/core';
import { drag } from 'd3-drag';
import { select} from 'd3-selection'

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective {
  constructor(private element:ElementRef) { }
  
  ngOnInit() {  
    const d3element = select(this.element.nativeElement); 
    
    d3element.call(drag()
      .on('start', (event:DragEvent)=>{      
         
      })
      .on('drag', (event:any, d:any)=>{ 
        d3element
          .style("left", Math.floor(event.x)+'px')
          .style("top", Math.floor(event.y)+'px')
      })
      .on('end', ()=>{   
      }))
  }
}

