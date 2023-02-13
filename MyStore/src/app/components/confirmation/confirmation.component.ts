import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName: string | null = '';
  total: number = 0;
  // Inject the ActivatedRoute dependency for receiving some information from other
  // non-related component.
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // Get the full name of the user and the total price that he has paid.
    this.fullName = this.route.snapshot.paramMap.get('name');
    this.total = parseFloat(
      this.route.snapshot.paramMap.get('totalPrice') as unknown as string
    );
  }
}
