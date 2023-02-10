import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  // '!' to indicate that the property will be initialized to receive data
  @Input() userData!: { name: string; email: string; role: string};
}
