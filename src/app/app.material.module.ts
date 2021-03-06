import { NgModule } from '@angular/core';
// import {MatDialogModule} from '@angular/material/dialog';
import 'hammerjs';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatGridListModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  exports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatGridListModule
  ]
})
export class AppMaterial {}
