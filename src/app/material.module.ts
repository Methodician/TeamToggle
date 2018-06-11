// Angular Material components
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: []
})

export class MaterialModule {}
