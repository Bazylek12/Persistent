import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home.component';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    JsonPipe,
    NgIf,
    AsyncPipe,
    MatTableModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
