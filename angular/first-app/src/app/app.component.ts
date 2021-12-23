import { TemplateLiteral } from "@angular/compiler";
import { Component } from "@angular/core";
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Users {
  name: string,
  
};

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent{
  users: Observable<Users[]> | undefined; 
  constructor(firestore: Firestore) {
    console.log(firestore);
    
    const collect = collection(firestore, 'users');
    console.log(collectionData(collect));
    
    // this.users= collectionData(collect);
  }
//   ngOnInit(){
    
//    const app= initializeApp(firebaseConfig)
//    const db = getFirestore(app);
// console.log(app);
// console.log(db);

//   }
  
}