import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  response: any = [];
  id: any;
  data: any;
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }

  update(body: any) {
    this.apiService.update(body).subscribe((response: any) => {
      this.response = response?.response;
      console.log('update player', this.response);
    });
  }
  Update(
    user_id: string,
    name: string,
    distributed_computing: string,
    data_structures: string,
    database_systems: string,
    software_engineering: string,
    big_data: string
  ) {
    const body = {
      user_id: user_id,
      name: name,
      distributed_computing: distributed_computing,
      data_structures: data_structures,
      database_systems: database_systems,
      software_engineering: software_engineering,
      big_data: big_data,
    };
    this.update(body);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/home']);
  }
}
