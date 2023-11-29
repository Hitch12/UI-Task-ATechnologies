import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';

const material:Array<any> = [
  TableModule,
  ButtonModule,
  ChartModule,
  DropdownModule,
  TooltipModule,
  InputTextModule,
  InputSwitchModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
