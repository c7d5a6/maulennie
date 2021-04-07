import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ConvertService } from './services/convert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentApplicationVersion = environment.appVersion;
  title = 'mauliennie';
  input = '';
  output = '';

  constructor(private convertService: ConvertService) { }

  convert(event: Event): void {
    event.stopPropagation();
    this.output = this.convertService.replaceText(this.input);
  }

}
