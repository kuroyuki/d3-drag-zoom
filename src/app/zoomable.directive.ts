import { Directive } from '@angular/core';
import { zoom, zoomIdentity, select } from "d3";

@Directive({
  selector: '[zoomable]'
})
export class ZoomableDirective {
  constructor() { }

  ngOnInit() {   
    //apply zoom and pan behavior
    let zBehavior:any = zoom()
      .scaleExtent([0.1, 8])
      .on("start", ()=>{})
      .on("zoom", (event:any)=>{   
        let transform = event.transform;   
        select(".zoomable-svg").attr("transform", transform); 
        select(".zoomable-html").style("transform", "translate("+transform.x+"px,"+transform.y+"px) scale("+transform.k+")");

      })
    //Apply it up  
    select("#zoomable-area").call(zBehavior)

    let transform = {x: 600, y: 400, k: 0.5}
    select(".zoomable-svg").attr("transform", "translate("+transform.x+","+transform.y+") scale("+transform.k+")");
    select(".zoomable-html").style("transform", "translate("+transform.x+"px,"+transform.y+"px) scale("+transform.k+")");
    select<any, any>("#zoomable-area")
      .call(zBehavior.transform, zoomIdentity.translate(transform.x,transform.y).scale(transform.k))
      .on("dblclick.zoom", null)
  }
}