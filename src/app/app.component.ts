import { Component } from '@angular/core';
import bindData from './bindData.json';
import {bindModel} from './_model/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
	bindData :any=[]
	status:any=false;
	imageStatus:any;
	loopData:any=[];
	

	constructor(){
	}
	  ngOnInit() {
	  	this.getAppendDatya()
	   }


	 getAppendDatya() {
	 	this.bindData= bindData;
	 	this.loopData=[
	 	{"id":1,"url":'../assets/img/dummy.jpg'},
	 	{"id":2,"url":'../assets/img/dummy.jpg'},
	 	{"id":3,"url":'../assets/img/dummy.jpg'},
	 	{"id":4,"url":'../assets/img/dummy.jpg'},
	 	{"id":5,"url":'../assets/img/dummy.jpg'},
	 	{"id":6,"url":'../assets/img/dummy.jpg'}
	 	];
	 	
	 }
	
	addImage(image){
        for(let i=0;i<this.bindData.length;i++){
        	if(this.bindData[i].id == image.id){
        		this.status=true;
        		this.loopData[i]["url"]=this.bindData[i]["url"];
        	}
        }
	}


	deleteImage(image){
		
       console.log(this.removeUrlImage(image))
		

	}
	removeUrlImage(image){
		// for(let i=0;i<this.bindData.length;i++){
  //       	if(this.bindData[i].id == image.id){      		
		// 		  this.loopData[i].url='../assets/img/dummy.jpg';
		// 		  console.log(this.loopData)
		// 	}

        // }
			const index =this.loopData.findIndex((el) => el.id ===image.id)

			this.loopData[index]='';
			console.log(this.loopData.reverse().sort())
			return this.loopData.reverse()

	}
}
