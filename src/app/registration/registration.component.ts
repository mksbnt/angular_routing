import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { User } from "./user";
import { emailValidator, firstNameValidator, secondNameValidator } from './validators';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user: User = new User();

  formErrors = {
    firstName: "",
    secondName: "",
    email: "",
    password: ""
  };

  validationMessages = {
    firstName: {
      required: "This field is required",
      minlength: "The first name must be at least two characters long",
      maxlength: "The first name must not consist of more than fifteen characters",
      firstNameValidator: "The first name must consist of letters"
    },
    secondName: {
      required: "This field is required",
      minlength: "The second name must be at least two characters long",
      maxlength: "The second name must not consist of more than fifteen characters",
      secondNameValidator: "The second name must consist of letters"
    },
    email: {
      required: "This field is required",
      emailValidator: "Invalid email address format"
    },
    password: {
      required: "This field is required",
      minlength: "Password must be at least eight characters long"
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = this.fb.group({
      firstName: [
        this.user.firstName,
        [Validators.required, Validators.minLength(2), Validators.maxLength(15), firstNameValidator]
      ],
      secondName: [
        this.user.secondName,
        [Validators.required, Validators.minLength(2), Validators.maxLength(15), secondNameValidator]
      ],
      email: [
        this.user.email, 
        [Validators.required, emailValidator]],
      password: [
        this.user.password,
        [Validators.required, Validators.minLength(8)]
      ]
    });

    this.registrationForm.valueChanges.subscribe(data =>
      this.onValueChange(data)
    );

    this.onValueChange();
  }

  onValueChange(data?: any) {
    if (!this.registrationForm) return;
    let form = this.registrationForm;

    for (let field in this.formErrors) {
      this.formErrors[field] = "";
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += message[key] + " ";
        }
      }
    }
  }

  onSubmit(form) {
    console.log("submitted");
    console.log(this.registrationForm.value);
    alert(`Registration complete!`);
  }
}
