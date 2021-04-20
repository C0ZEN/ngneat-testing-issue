import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@ngneat/reactive-forms";
interface IForm {
  firstname: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public form = new FormGroup<IForm>({
    firstname: new FormControl<string>("", Validators.required)
  });
}
