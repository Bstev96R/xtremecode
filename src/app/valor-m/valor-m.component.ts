import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService} from 'src/app/shared/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-valor-m',
  templateUrl: './valor-m.component.html',
  styleUrls: ['./valor-m.component.css']
})
export class ValorMComponent implements OnInit {
  list: Employee[];
  v: number;
 
  constructor(private service: EmployeeService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      })
      this.v=this.list.length;
      this.v=this.v - 1;
      
 
    });

  
  }

}
