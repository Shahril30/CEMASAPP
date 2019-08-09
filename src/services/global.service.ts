import { Global } from '../models/globalpass.model';
import { Injectable } from '@angular/core';
 
@Injectable()
export class GlobalService {

    private globalpass: Global[] = []; 
    addUseremail(email: string){
        this.globalpass.push(new Global(email));
    }

    getUseremail(){
        return this.globalpass.slice(); 
    }

    updateUseremail(
        index: string,
        email: string){
        this.globalpass[index] = new Global(email);
    }

    removeUseremail(){
        this.globalpass.splice(1);
    }
}