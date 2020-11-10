import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-eventos',
  templateUrl: './component-eventos.component.html',
  styleUrls: ['./component-eventos.component.css']
})
export class ComponentEventosComponent implements OnInit {

    category: string = 'All';

  constructor() { }

  ngOnInit(): void {

  }

  changeCategory(category: string): void {
    this.category = category;
  }
}
