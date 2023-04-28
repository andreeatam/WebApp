import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../Models/people';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private fs: Firestore) { }

  getPeople(): Observable<Person[]>{
    const myCollection: any=collection(this.fs,'allPeople')
    return collectionData(myCollection);
  }

  addPeople(person:Person){
    const myCollection=collection(this.fs,'allPeople')
    addDoc(myCollection,person);
  }
}
