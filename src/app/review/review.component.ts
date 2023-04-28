import { Component } from '@angular/core';

import { Person } from '../Models/people';
import { PeopleService } from '../Services/people.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  constructor(private personService: PeopleService) {}

  inputValue: string='';
  allPeopleFromDB: Person[]=[];
  newFirstName: string='';
  newSecondName: string=''
  newEmail: string='';
  newYear: number=0;
  newReview: string='';
  
  public myMessage=false;

  sendPersonReview():void{
    let newPerson={firstName: this. newFirstName, secondName: this. newSecondName, 
      email: this.newEmail, year: this.newYear, review: this.newReview};
    this.personService.addPeople(newPerson);
  }

  getAllPeople():void{
    this.personService.getPeople().subscribe(result=>
      {
          this.allPeopleFromDB=result;
      }
    )
  }

  showMessage():void{
    alert("Review was submitted successfully!");
    this.newFirstName='';
    this.newSecondName='';
    this.newEmail='';
    this.newYear=0;
    this.newReview='';
  }
}
