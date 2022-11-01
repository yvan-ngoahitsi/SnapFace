import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
        id: 1,
        title:"Archibald",
        description:"Mon meilleur ami depuis tout petit !",
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 130,
        location: 'Casablanca'
        },
        
        {
        id: 2,
        title:'Three Rock Mountain',
        description:'Un endroit magnifique pour les randonnés.',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 230,
        location: 'Haut Atlas'
        },
    
         {
          id: 3,
          title:'Un bon repas',
          description:'Mmmh que c\'est bon !',
          imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 35
        },
        {
          id: 4,
          title:"Archibald",
          description:"Mon meilleur ami depuis tout petit !",
          imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 250,
          location: 'Casablanca'
        },
          
        {
          id: 5,
          title:'Three Rock Mountain',
          description:'Un endroit magnifique pour les randonnés.',
          imageUrl:'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 200,
          location: 'Haut Atlas'
        },
      
        {
            id: 5,
            title:'Un bon repas',
            description:'Mmmh que c\'est bon !',
            imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 210
        }
      ];

    //Gat all Snaps
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    //Get snap by ID
    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!faceSnap) {
          throw new Error('FaceSnap not found!');
      } else {
          return faceSnap;
      }
    }

    //Snap by id
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }


}