import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RecordDetailsComponent } from './record-details/record-details.component';

const routes: Routes = [{ path: '', component: RecordDetailsComponent },
  { path: 'view-record-details/:id', component: ViewDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
