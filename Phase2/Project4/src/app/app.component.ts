import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Quiz Time';

  header:string="Quiz!"

  msg:string="";
  
  questions:any = [];
  submited:boolean = false;

  constructor(private httpClient:HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/questions.json").subscribe(data=>this.questions=data);
  }

  submitAnswers(testRef:NgForm){
    this.submited=true;
    let test = testRef.value;
    let correctAnswers:number=0;
    let size:number=0;
    for(let q in this.questions){
      if(test[q]==this.questions[q].correct){
        correctAnswers++;
      }
      size++;
    }
    this.header="Review your Results"
    this.msg="You got "+correctAnswers+" out of "+size+" correct"
  }

  classSelector(id:number,answer:string):any{
    let result:any = "";
    if(answer===this.questions[id].correct&&this.submited){
      result=`correct`
    }
    else if(this.submited){
      result="incorrect"
    }
    return result;
  }

}
