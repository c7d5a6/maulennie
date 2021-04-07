import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../../services/convert.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  input = '';
  output = '';

  constructor(private convertService: ConvertService) { }

  ngOnInit(): void {
  }

  convert(event: Event): void {
    event.stopPropagation();
    this.output = this.convertService.replaceText(this.input);
  }
}
