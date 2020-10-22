import { NgModule } from '@angular/core';
//Componentes a importar
import {
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatIconModule,
	MatMenuModule,
	MatInputModule,
	MatDialogModule,
	MatSidenavModule,
	MatExpansionModule,
	MatSelectModule,
	MatTableModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTooltipModule,
	MatSnackBarModule,
	MatListModule,
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatInputModule,
		MatDialogModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatListModule,
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatInputModule,
		MatDialogModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatListModule,
	],
})
export class AMaterialModule {}
