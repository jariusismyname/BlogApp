import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true, // ✅ this is the fix
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
