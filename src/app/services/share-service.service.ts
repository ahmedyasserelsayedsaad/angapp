import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
isAdmin=false;
  constructor(private http:HttpClient) {

   }
   getData(){
    return this.http.get('https://fakestoreapi.com/products');
   }
   proDet(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
   }
   cate(){
    return this.http.get('https://fakestoreapi.com/products/categories')
   }
   filterByCate(key:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+key)
   }
}
