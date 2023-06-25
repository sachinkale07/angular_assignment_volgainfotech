import { Injectable } from '@angular/core';
import { RecordDetails } from '../model/record-details';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private records: RecordDetails[] = [
    { id: 1, name: 'James', email: 'james@gmail.com', phone: '8583453234', address: '123 Street' },
    { id: 2, name: 'Ciara', email: 'ciara@gmail.com', phone: '9963423854', address: '456 Avenue' },
    { id: 3, name: 'Wayne', email: 'wayne@gmail.com', phone: '4348273323', address: '477 Solapur' },
    { id: 4, name: 'Maya', email: 'maya@gmail.com', phone: '992055856', address: '457 Pune' },
  ];

  getRecords() {
    return this.records;
  }

  createRecord(record: any) {
    const newRecord = { ...record, id: this.generateId() };
    this.records.push(newRecord);
  }

  deleteRecord(id: number) {
    const index = this.records.findIndex(record => record.id === id);
    if (index !== -1) {
      this.records.splice(index, 1);
    }
  }

  getRecordById(id: number) {
    return this.records.find(record => record.id === id);
  }

  searchByEmail(email: string) {
    return this.records.find(record => record.email === email);
  }

  private generateId(): number {
    // Generate a unique ID for new records
    const maxId = this.records.reduce((max, record) => Math.max(max, record.id), 0);
    return maxId + 1;
  }
}