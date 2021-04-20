import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AngularFormComponent } from "./components/angular/angular.component";
import { NgneatFormComponent } from "./components/ngneat/ngneat.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, AngularFormComponent, NgneatFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
