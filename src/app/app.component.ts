import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items:{name:string, text:string, pos:{x:number,y:number}}[] = [
    {name:"Item1", text:"tejfslf fkel;f fl lfldlf ; ", pos:{x:12,y:20}},
    {name:"Item2", text:"A big booty body was showing on the horizon. Guess what?", pos:{x:300, y:500}}
  ];
  onMouseOver(index:number){
    let ch = this.items[index]
    this.items.splice(index,1);
    this.items.push(ch)
  }
}
