import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { JwtClientService } from '../services/security-client/jwt-client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private jwtClient: JwtClientService, private router: Router) {}
  
  login(logForm: NgForm) {

    const authRequest = {
      username: logForm.value.username,
      password: logForm.value.password
    }

    this.jwtClient.generateToken(authRequest).subscribe(token => {
      if (token) {
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
        // console.log(token);
      } else {
        // handle error
      }
    });
    
  }
}
