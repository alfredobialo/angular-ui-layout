import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PageLayoutComponent} from "./ui/components/page-layout.component";

@Component({
  selector: 'aui-app',
  standalone: true,
  imports: [RouterOutlet, PageLayoutComponent],
  template: `
    <aui-page-layout> </aui-page-layout>

  `
})
export class AppComponent {

}
