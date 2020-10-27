import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/types/user';

@Component({
  selector: 'delete-user-component',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  @Output() getUser: EventEmitter<number> = new EventEmitter();

  @Input() user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('userId');
    this.getUser.emit(userId);
  }

  back() {}
}
