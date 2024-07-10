import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { invalidEmailDomain } from './InvalidEmailDomain';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }

  contactForm = new FormGroup({
    senderName : new FormControl('',Validators.required),
    senderEmail : new FormControl('',[Validators.required,Validators.email,invalidEmailDomain]),
    senderMessage : new FormControl('',[Validators.required,Validators.minLength(10)])
  });


  submitForm(){
    console.log(this.contactForm.valid);
  }

}
