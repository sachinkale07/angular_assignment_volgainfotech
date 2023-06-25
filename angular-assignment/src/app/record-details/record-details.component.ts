import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/services/dataservice.service';
import { RecordDetails } from 'src/model/record-details';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent { 
  newRecord: any = {};
  searchEmail!: string ;
  filteredRecords!: RecordDetails[];

  constructor(private dataService: DataserviceService, private router: Router) {
  }
  ngOnInit() {
    this.filteredRecords = this.dataService.getRecords();
  }
  
  createRecord() {
    this.dataService.createRecord(this.newRecord);
    this.newRecord = {};
  }

  deleteRecord(id: number) {
    this.dataService.deleteRecord(id);
  }

  viewDetails(id: number) {
    this.router.navigate(['/view-record-details', id]);
  }

  searchRecord() {
    if (this.searchEmail) {
      const searchTerm = this.searchEmail.toLowerCase();
      this.filteredRecords = this.dataService.getRecords().filter(record => record.email.toLowerCase().includes(searchTerm));
      console.log(this.filteredRecords)
    } else {
      this.filteredRecords = this.dataService.getRecords();
    }
  }
  
}