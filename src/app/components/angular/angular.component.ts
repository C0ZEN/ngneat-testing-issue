import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { validatorEmpty } from "../../validators/empty.validator";

@Component({
  selector: "angular-form",
  templateUrl: "./angular.component.html",
  styleUrls: ["./angular.component.scss"]
})
export class AngularFormComponent {
  public form = new FormGroup({
    firstname: new FormControl("", validatorEmpty())
  });
}
