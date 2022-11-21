import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-search',
  templateUrl: './pais-search.component.html',
  styleUrls: ['./pais-search.component.css'],
})
export class PaisSearchComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  public termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((valor) => this.onDebounce.emit(valor));
  }
  public buscar(): void {
    console.log(this.termino);
    this.onEnter.emit(this.termino);
  }
  public teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }
}
