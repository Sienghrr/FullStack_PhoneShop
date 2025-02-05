import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandForm !: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder, private brandService : BrandService) { }
  ngOnInit(): void {
    this.brandForm = this.fb.group({
      name:['']
    });
  }
  saveBrand(){    
    //console.log(this.brandForm.value);
    this.brandService.saveBrand(this.brandForm.value).subscribe(res => {
      console.log('Brand saved successfully');
      console.log(res);
  },err =>{
    console.log("error block")
    console.error(err);
  })

}
}
