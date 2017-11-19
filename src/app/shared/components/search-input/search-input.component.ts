import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  public value: string;
  @Output() result: EventEmitter<any> = new EventEmitter();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public searchName() {
    this.httpService.get(`orders/${this.value}`).subscribe(result => this.result.emit(result));
  }

}
