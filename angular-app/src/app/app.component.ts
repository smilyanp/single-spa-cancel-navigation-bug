import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';

  @HostListener('window:single-spa:before-routing-event', ['$event.detail'])
  public beforeRoutingEvent($event: any): void {
    console.log(
      '=== history.length in before-routing-event hook ' + history.length
    );
    console.log(
      'new URL($event.newUrl).pathname',
      new URL($event.newUrl).pathname
    );
    if (
      new URL($event.oldUrl).pathname === '/angular/' &&
      new URL($event.newUrl).pathname === '/react'
    ) {
      if (
        confirm(
          'Are you sure you want to navigate? You might lose some data'
        ) == true
      ) {
        console.log("don't cancel navigation");
      } else {
        console.log('cancel navigation');
        $event.cancelNavigation();
      }
    }
  }
}
