import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gpark',
  templateUrl: './gpark.component.html',
  styleUrls: ['./gpark.component.css']
})
export class GparkComponent implements OnInit {
  markers = {} as any;
  marker = {} as any ;
  parking = {} as any;
  isDraggable: boolean;
  selected = '';
  lat: 40.235;
  lng: 7.36548;
  cmp = 0;
  zoom = -5;
  i = 2;
  key: string;
  M: any;
  p: any;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getListPark()
    .subscribe(res => this.marker = res);
    this.cmp = this.marker.length ;
  }
  c() {
    // tslint:disable-next-line:prefer-for-of
    for ( this.p of this.marker) {
      console.log(this.p);
      this.cmp++;
 }
  }


saveParking() {
  this.auth.savePark(this.markers)
  .subscribe(
    res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/pres']);
    },
    err => console.log(err)
  );


}

// tslint:disable-next-line:variable-name
onDelete(_id: string) {
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0 ; i < 100 ; i++) {
    if ( this.markers.name === this.marker[i].name ) {
      if (confirm('Are you sure to delete this record ?') === true) {
        this.auth.deletePark(this.marker[i]._id).subscribe((res) => {
          this.ngOnInit();
          this.M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        });
      }
  }
  }
}
selectChangeHandler($event) {}

}


