import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands !: any[];
  constructor(private brandService : BrandService) { }
  ngOnInit(): void {
    let param = new HttpParams
    //.append("_page",2)
    //.append("_limit",5)
    param = param.append("_limit",5)
    this.getBrands(param);
  }
  private getBrands(param: HttpParams) {
    this.brandService.getBrandList(param).subscribe(res=>{
      this.brands = res.list;
      console.log(res);
    },err=>{
      console.error(err);
    }
    )
  }
  getBrandByLimit(limitCamboBox:any){
    let limit = limitCamboBox.target.value;
    //console.log(limitCamboBox.target.value);
    let param = new HttpParams    
    param = param.append("_limit",limit)
    this.getBrands(param);
  }

}
