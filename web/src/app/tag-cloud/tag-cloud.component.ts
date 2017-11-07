import { Component, OnInit, OnDestroy } from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})

export class TagCloudComponent implements OnInit, OnDestroy {
  private req: any;

  noe: any;

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value  
    width : 1000,
    height : 400,
    overflow: false,
  }
 
  data: Array<CloudData> = [
    //{text: 'Weight-10-link-color', weight: 10, link: 'https://google.com', color: '#ffaaee'},
    {text: 'Weight-9-link', weight: 9, link: 'https://google.com'},
    {text: 'Weight-8-link', weight: 8, link: 'https://google.com'},
    {text: 'Weight-7-link', weight: 7, link: 'https://google.com'},
    {text: 'Weight-6-link', weight: 6, link: 'https://vg.no'},
  ]


  constructor(private http: HttpClient) {}

  ngOnInit() {

   

    this.req = this.http.get('http://localhost:8084/cloud/test').subscribe(data=>{
      console.log(data);
      this.noe = data
      this.changeData({text: this.noe.text, weight: this.noe.weight, link: this.noe.url});
     
    })
    //TODO sende data fra HTTP til ordskyen
    //TODO få sendt real data fra db til ordsky
    
    let liste = [
      ['Weight-5-link',5,'https://dagbladet.no'],
      ['Weight-4-link',4,'https://reddit.com'],
      ['Weight-3-link',3,'https://nrk.no'],
      ['Weight-2-link',2,'https://ntnu.no'],
    ]

    /*let x = 'Weight-1-link';
    this.data.push({text: x, weight: 1, link: 'https://dagbladet.no'});

    for (let index = 0; index < liste.length; index++) {
      let el = liste[index];
      this.data.push({text: el[0].toString(), weight: Number(el[1]), link: el[2].toString()});
    }
    */
  }
  
  changeData(newData){
    const changedData$: Observable<Array<CloudData>> = Observable.of([newData]);
    changedData$.subscribe(res => this.data = res);
  }
  
  ngOnDestroy(){
    this.req.unsubscribe();
  }

}
