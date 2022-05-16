import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { TrashComponent } from './pages/trash/trash.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'reminders',
    component: RemindersComponent,
  },
  {
    path: 'sleep',
    component: SleepComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },

  {
    path: 'archives',
    component: ArchivesComponent,
  },
  {
    path: 'trash',
    component: TrashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
