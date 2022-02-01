import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { BookComponent } from './book/book.component';
import { ProductfilterPipe } from './pipes/productfilter.pipe';
import { ContactformComponent } from './contactform/contactform.component';
import { JobdesignationDirective } from './contactform/jobdesignation.directive';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ProductService } from './services/product.service';
import { BookAuthorComponent } from './book-author/book-author.component';
import { BooksService } from './httpService/books.service';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { SalesRepComponent } from './parent-child/sales-rep/sales-rep.component';
import { OrdersComponent } from './parent-child/orders/orders.component';
import { OrderfilterPipe } from './pipes/orderfilter.pipe';
import { EmployeelistComponent } from './child-parent/employeelist/employeelist.component';
import { EmployeecountComponent } from './child-parent/employeecount/employeecount.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { EmployeedetailsComponent } from './parent-child/employeedetails/employeedetails.component';
import { SkillComponent } from './parent-child/skill/skill.component';
import { EmployeefilterPipe } from './pipes/employeefilter.pipe';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { SkilldirectiveDirective } from './employeeform/skilldirective.directive';
import { TouristSpotsComponent } from './tourist-spots/tourist-spots.component';

const navigationpath : Routes =[
  {path:'home' , component : HomeComponent},
  {path :'studentDetail' , component :  StudentComponent},
  {path : 'productCatalog' , component : ProductComponent},
  {path : 'productDetails/:productcode' , component : ProductDetailComponent},
  {path : 'bookDetail' , component : BookComponent},
  {path : 'bookAuthor' , component : BookAuthorComponent},
  {path : 'contactform' , component : ContactformComponent},
  {path : 'reactiveform' , component : ReactiveformComponent},
  {path : 'salesrep' ,component : SalesRepComponent},
  {path : 'empdetails' , component : EmployeelistComponent},
  {path : '', redirectTo : "/home", pathMatch : "full"},
  {path : '**', component : PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProductComponent,
    BookComponent,
    ProductfilterPipe,
    ContactformComponent,
    JobdesignationDirective,
    ReactiveformComponent,
    BookAuthorComponent,
    ParentComponent,
    ChildComponent,
    SalesRepComponent,
    OrdersComponent,
    OrderfilterPipe,
    EmployeelistComponent,
    EmployeecountComponent,
    PagenotfoundComponent,
    ProductDetailComponent,
    EmployeedetailsComponent,
    SkillComponent,
    EmployeefilterPipe,
    EmployeeformComponent,
    SkilldirectiveDirective,
    TouristSpotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(navigationpath)
  ],
  providers: [ProductService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
