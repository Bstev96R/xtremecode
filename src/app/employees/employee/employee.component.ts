import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserInterface } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Employee} from '../../shared/employee.model';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
 comp: string;
 displayForm: boolean = false;
  
  user: UserInterface = {
    name:'',
    email: '',
    photoUrl:''
  };
   
  public providerId: string = 'null';
  constructor(private service: EmployeeService,
    private firestore: AngularFirestore,private authService: AuthService) { }

  ngOnInit() {
    this.resetForm();


    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
      }
    })

   
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fullName: '',
      oferta: '',

    }
  }
  onSubmit(form: NgForm) {
  
    
    let data = Object.assign({}, form.value);
    
    delete data.id;
    data.fullName= this.user.name;
   
    
    if (form.value.id == null)

      this.firestore.collection('employees').add(data);

       

    else
      this.firestore.doc('employees/' + form.value.id).update(data);

    this.resetForm(form);
   
    
    
    
  }

 

}
