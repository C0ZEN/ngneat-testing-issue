
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl } from "@ngneat/reactive-forms";
import { Firstname, IForm } from "../../models";
import { EmptyValidationError } from "../../validators/empty.validator";
import { validatorEmpty } from "../../validators/empty.validator";

@Component({
  selector: "ngneat-form",
  templateUrl: "./ngneat.component.html",
  styleUrls: ["./ngneat.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NgneatFormComponent {
  public form = new FormGroup<IForm>({
    firstname: new FormControl<Firstname, EmptyValidationError>("", [
      validatorEmpty(),
      Validators.required
    ])
  });
}
