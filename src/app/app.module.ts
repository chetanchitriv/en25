import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VideoChatComponent } from './videochat/videochat.component';
import {RouterModule, Routes} from "@angular/router";
import { ConnectingComponent } from './connecting/connecting.component';
import { NoAvailableAgentComponent } from './no-available-agent/no-available-agent.component';
import { StartConsultationComponent } from './start-consultation/start-consultation.component';

const routes: Routes = [
  {path: '' , redirectTo:'no-available-agent', pathMatch: 'full'},
  {path: 'no-available-agent', component: NoAvailableAgentComponent},
  {path: 'start-consultation', component: StartConsultationComponent},
  {path: 'connecting', component: ConnectingComponent},
  {path: 'videochat', component: VideoChatComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NoAvailableAgentComponent,
    StartConsultationComponent,
    ConnectingComponent,
    VideoChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
