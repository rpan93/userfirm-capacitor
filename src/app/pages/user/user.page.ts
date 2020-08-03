import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  searchTerm: string = '';
  results: Observable<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchChanged(){
    this.results = this.userService.searchData(this.searchTerm);
  }

}
