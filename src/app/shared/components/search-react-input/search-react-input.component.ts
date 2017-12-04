import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-search-react-input',
  templateUrl: './search-react-input.component.html',
  styleUrls: ['./search-react-input.component.css']
})
export class SearchReactInputComponent implements OnInit {


  @Output() result: EventEmitter<any> = new EventEmitter();
  public search: FormControl = new FormControl();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.search.valueChanges
      .debounceTime(3000)
      .subscribe(value => this.searchName(value));
  }

  public searchName(value) {
    this.httpService.get(`orders/${value}`).subscribe(result => this.result.emit(result));
  }

}
