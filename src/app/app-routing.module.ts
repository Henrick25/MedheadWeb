import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
const routes: Routes = [{ path: '', component: SearchHospitalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
