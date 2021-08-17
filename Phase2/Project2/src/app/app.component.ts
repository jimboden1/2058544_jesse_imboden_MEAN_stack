import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';
  credentials:Map<string,User>= new Map([
    ["default",new User("Default", "User", "default","password")]
  ])
  active?:User;
  contacts:Array<Contact>=[];
  stringafy:string ="";
  name:any = "default"

  login:boolean = true;
  register:boolean=false;
  view:boolean=false;
  msg:string ="";
  
  addUser(registerRef:NgForm){
    let user = registerRef.value;
    this.credentials.set(""+user.username,new User(user.fname,user.lname,user.username,user.password));
    this.goToLogin();
  }

  goToLogin(){
    this.login=true;
    this.register=false;
    this.msg ="";
  }
  goToRegister(){
    this.login=false;
    this.register=true;
  }
  loginUser(loginRef:NgForm){
    let attempt = loginRef.value;
    let fail ="Your user name or password was not recognised please try again or use the link above to sign up";
    this.stringafy=""+this.credentials.has(""+attempt.username) + this.credentials.has("default");
    if(this.credentials.has(attempt.username)){
      let user = this.credentials.get(attempt.username);
      if(user?.password==attempt.password){
        this.active=this.credentials.get(attempt.username);
        this.name = attempt.username;
        this.login=false;
        this.view=true;
      }
      else{
        this.msg=fail;
      }
    }
    else{
      this.msg=fail;
    }
  }
  addContact(contactRef:NgForm){
    let contact = contactRef.value
    this.contacts.push(new Contact(contact.name,""+contact.phone));
  }
}

class User{
  constructor(public fname:string, public lname:string,
    public username:string, public password:string){}
}

class Contact{
  constructor(public name:string, public phone:string){}
}
