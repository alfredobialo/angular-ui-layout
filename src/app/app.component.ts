import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'aui-app',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="p-3">
      <h1>asom.rental.ui</h1>
      <p>App Title: {{title}}</p>

      <pre>
        <table class="table" border="0" cellpadding="5" cellspacing="0">
          <tr style="font-weight: bolder">
            <td style="width:4%;">S/N</td>
            <td style="width:13%;  text-align:left">First Name</td>
            <td style="width:13%;  text-align:left;">Last Name</td>
            <td style="width:10%;  text-align:left;">Email</td>
            <td style="width:5%;  text-align:left;">Age</td>
          </tr>
          @for(student of students; track student.id) {
          <tr [class]="{'bg-gray' : $odd}">
            <td>{{$index + 1}}</td>
            <td>{{student.firstName}}</td>
            <td>{{student.lastName}}</td>
            <td>{{student.email}}</td>
            <td>{{student.age}}</td>
          </tr>
          }
        </table>

      </pre>
    </div>

  `
})
export class AppComponent {
  title = 'Biznes-Book';
  students  = [
    {
    firstName : "James",
    lastName : "Okoye",
    email : "jameso@yahoo.com",
    age : 34,
    id:"james-okoye"
  },
    {
      firstName : "Chinoye",
      lastName : "Alvana",
      email : "chialvana@yahoo.com",
      age : 18,
      id:"chi-alvana"
    },{
      firstName : "Valentine",
      lastName : "Uche",
      email : "valuche@yahoo.com",
      age : 18,
      id:"chi78-alvana"
    },{
      firstName : "Peter",
      lastName : "Odili",
      email : "419@yahoo.com",
      age : 18,
      id:"chi56-alvana"
    },{
      firstName : "Chinonso",
      lastName : "Alvana",
      email : "chialvana@yahoo.com",
      age : 18,
      id:"chi2-alvana"
    },{
      firstName : "Dumebi",
      lastName : "Alvana",
      email : "chialvana@yahoo.com",
      age : 18,
      id:"chi3-alvana"
    },
  ]
}
