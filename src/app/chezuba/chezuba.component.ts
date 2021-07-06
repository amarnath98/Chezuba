import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject, VirtualTimeScheduler } from 'rxjs';
import { MyServiceService } from '../services/my-service.service';
import { jsonData } from './chezuba.model';
import {​ NgxSpinnerService }​ from 'ngx-spinner';


@Component({
  selector: 'app-chezuba',
  templateUrl: './chezuba.component.html',
  styleUrls: ['./chezuba.component.css']
})
export class ChezubaComponent implements OnInit {
  jsonData: jsonData[];
  threelist: Array<any> = [];
  isSearchEnabled: boolean;
  searchterm: string;
  state: string;
  private _announcement: Subject<string>;
  private _showLoader: Subject<boolean>;
  constructor(private myService: MyServiceService, private spinner: NgxSpinnerService) {
    let self = this;
    self.isSearchEnabled = false;
    self._announcement = new Subject<string>();
    self._showLoader = new Subject<boolean>();
  }

  ngOnInit() {
    this.loadJson();
  }

  loadJson() {
    let self = this;
    this.spinner.show();
    self.myService.getJson().subscribe(
      res => {
        try {
          this.jsonData=res;
          this.jsonData.forEach(elem => {
            if (elem.id % 3 == 0) {
              elem.category = 'thirds';
            } else if (elem.id % 5 == 0) {
              elem.category = 'fifths';
            }
            if (elem.id % 15 == 0) {
              elem.category = 'magic';
            }
          });
          this.spinner.hide();
        }
        catch {
          this.spinner.hide();
        }
      },
      error => {
        this.spinner.hide();
      }
    );
  }

  setList(e) {
    if(e){
    this.state = e;
    this.spinner.show();
    this.threelist=[];
    this.jsonData.forEach(elem => {
      if (elem.category == e) {
        this.threelist.push({'id':elem.id,'data':elem});
      }
    })
    this.spinner.hide();
  }
  }

reset(){
this.setList(this.state);
}

  delete(e){
   this.threelist.forEach((elem,index)=>{
     if(elem.id==e.toString()){
       this.threelist.splice(index,1);
     }
   })
  }

  enableSearch(){
    if(this.threelist.length != 0 && this.isSearchEnabled == false){
      this.isSearchEnabled = true;
    }
    else{
    this.isSearchEnabled = false;
    this.searchterm = "";
    this.setList(this.state);
    }

  }
  search(){
    if(this.isSearchEnabled && this.threelist.length != 0){
      this.threelist = this.threelist.filter(elem=> elem.id.toString() == this.searchterm);
    }
    else if(this.threelist.length == 0){
      this.term();
    }
    console.log(this.threelist);
  }

  term()
  {
    if(Number(this.searchterm)%3 ==0)
        this.setList('thirds');
      else if(Number(this.searchterm)%5 ==0)
        this.setList('fifths');
      else
        this.setList('magic');
    this.search();
  }
}
