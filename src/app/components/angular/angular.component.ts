import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@ngneat/reactive-forms";
import { validatorEmpty } from "../../validators/empty.validator";

@Component({
  selector: "angular-form",
  templateUrl: "./angular.component.html",
  styleUrls: ["./angular.component.scss"]
})
export class AngularFormComponent {
  public form = new FormGroup({
    firstname: new FormControl("", validatorEmpty)
  });
}
