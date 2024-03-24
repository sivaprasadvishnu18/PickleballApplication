import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule} from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormField } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

const matModules = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormField,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatMenuModule,
    MatToolbarModule
]

@NgModule({
    declarations: [],
    imports: [CommonModule, ...matModules],
    exports: [...matModules],
})
export class MaterialModule {}
