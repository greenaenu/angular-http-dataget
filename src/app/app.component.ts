import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any;
  $data: Observable<any>;
  constructor(private dataservice: DataService) {}
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    // this.dataservice.getData().subscribe((response) => (this.data = response));
    this.$data = this.dataservice.getData();
  }
}
