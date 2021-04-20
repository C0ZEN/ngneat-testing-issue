import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public form = new FormGroup({
    name: new FormControl("", Validators.required)
  });
}
