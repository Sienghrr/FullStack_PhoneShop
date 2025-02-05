import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {
brandForm !: FormGroup;
  isSubmitted = false;
  brandId !: number;
  constructor(private fb: FormBuilder, private brandService : BrandService
    ,private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.brandForm = this.fb.group({
      id:[''],
      name:['']
    });
    // use paramMap
        this.route.paramMap.subscribe((paramMap:ParamMap) => {
          this.brandId = parseInt(paramMap.get("id")!);
          this.brandService.getById(this.brandId).subscribe(brand=>{
            this.brandForm.patchValue(brand);            
          },err =>{
              console.log(err);
          })
        });
  }
  createBrand(){    
    //console.log(this.brandForm.value);
    this.brandService.saveBrand(this.brandForm.value).subscribe(res => {
      this.isSubmitted = true;
      console.log('Brand saved successfully');
      console.log(res);
  },err =>{
    console.log("error block")
    console.error(err);
  })  

}
saveBrand(){
  if(this.brandId ){
    this.updateBrand()
  }else{
    this.createBrand()
  }
}

updateBrand(){
  this.brandService.updateBrand(this.brandForm.value).subscribe(res => {
    this.isSubmitted = true;
    console.log('Brand update successfully');
    console.log(res);
},err =>{
  console.log("error block")
  console.error(err);
})  
}
}
