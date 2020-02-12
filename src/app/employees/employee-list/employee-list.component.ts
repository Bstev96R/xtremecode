import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService} from 'src/app/shared/employee.service';
import { UserInterface } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list: Employee[];
  displayForm: boolean = false;
  
  user: UserInterface = {
    name:'',
    email: '',
    photoUrl:''
  };

  public providerId: string = 'null';
  

  constructor(private service: EmployeeService,
    private firestore: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      })
    });


    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    })


  }

  getnombre(){
   
  }

}
