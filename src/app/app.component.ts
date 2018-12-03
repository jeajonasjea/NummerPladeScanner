import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NummerpladeScanner';
  installable: boolean = true;
  
  constructor(){
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
     // Prevent Chrome 67 and earlier from automatically showing the prompt
     e.preventDefault();
     // Stash the event so it can be triggered later.
     deferredPrompt = e;
     this.installable = true;
   });
  }
}
