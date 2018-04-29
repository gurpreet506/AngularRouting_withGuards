import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
    template:
    `<h1>Android IDE Selected: {{selectedIDE}}</h1>`
})

export class AndroidIDEComponent implements OnInit{
    public selectedIDE:string;
    private observerRef: any;

    constructor(private route:ActivatedRoute){
//this.selectedIDE=route.snapshot.params['ideSelected'];
}
ngOnInit(){
    this.observerRef=this.route.params.subscribe(params=>{
        this.selectedIDE=params['ideSelected'];
});
}
    
ngOnDestroy(){
this.observerRef.unsubscribe();
    }
}