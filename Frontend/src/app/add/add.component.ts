import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  response: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  addDetails(body: any) {
    this.response = this.apiService.addData(body).subscribe((response: any) => {
      this.response = response?.response;
    });
  }
  Add(
    name: string,
    distributed_computing: string,
    data_structures: string,
    database_systems: string,
    software_engineering: string,
    big_data: string
  ) {
    const body = {
      name: name,
      distributed_computing: distributed_computing,
      data_structures: data_structures,
      database_systems: database_systems,
      software_engineering: software_engineering,
      big_data: big_data,
    };
    this.addDetails(body);
    this.homePage();
  }
  homePage() {
    this.routes.navigate(['/home']);
  }
}
