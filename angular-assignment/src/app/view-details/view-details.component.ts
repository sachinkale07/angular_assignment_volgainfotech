import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/services/dataservice.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  record: any;

  constructor(private route: ActivatedRoute, private dataService: DataserviceService) {}

  ngOnInit() {
    const recordId = Number(this.route.snapshot.paramMap.get('id'));
    this.record = this.dataService.getRecordById(recordId);
  }
}
