import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@ngneat/reactive-forms";
import { Firstname, IForm } from "../../models";
import { validatorEmpty } from "../../validators/empty.validator";

@Component({
  selector: "ngneat-form",
  templateUrl: "./ngneat.component.html",
  styleUrls: ["./ngneat.component.scss"]
})
export class NgneatFormComponent {
  public form = new FormGroup<IForm>({
    firstname: new FormControl<Firstname>("", validatorEmpty)
  });
}
