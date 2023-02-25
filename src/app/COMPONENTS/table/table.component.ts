import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { DatePipe } from '@angular/common'
// import { Data } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit{

  constructor(public api:ApiService,public datepipe:DatePipe){}
  

  user:any=[];
  filterUser:any=[];
  filterBy:any;
  dates:Date[]=[];
  fixtures:any=[]
  // DATA:Data[] =[] ;



  ngOnInit():void{
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      this.dates.push(date);
    }


    this.api.getJson().subscribe((resp)=>{
      // console.log(resp)
      this.user=resp
      this.filterUser=[...this.user]

    
    })

    
  }
  filter(val:any){
    let selected=this.datepipe.transform(val, 'M/d/yyyy');
    console.log(selected);
    this.fixtures=[];
    this.filterUser=[...this.user.filter((m:any) =>{
        if(m.MatchDate.match(selected)){
        // console.log(m);
         this.fixtures.push(m);
        //  console.log(this.fixtures);
       
        }
      })
    ]    
  }
}
// class Data{
//   Country!:string ;
//   MatchName!:string;
//   MatchDate!:any;

// }