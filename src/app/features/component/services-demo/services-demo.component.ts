import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/http-services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { map, retry, tap, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesDemoComponent implements OnInit {

  user: User = {} as User;
  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initUsers();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // this.users.push(form.value);
      if (!this.user.id) {
        // add user
        this.userService.add(this.user)
          .subscribe(user => {
            alert(`User ${user?.name} successfuly created!`);
            this.initUsers();
            form.reset();
          });
      } else {
        // update user
        this.userService.update(this.user)
          .subscribe(user => {
            alert(`User ${user?.name} successfuly updated!`);
            this.initUsers();
            form.reset();
          });
      }
      
    }
  }

  onEdit(id: number): void {
    this.userService.getById(id)
      .subscribe(user => {
        this.user = user;
      });
  }

  onDelete(id: number): void {
    this.userService.delete(id)
      .subscribe(user => {
        alert('User successfully deleted');
        this.initUsers();
      });
  }

  private initUsers(): void {
    this.userService.getAll()
      .pipe(
        // timeout(1),
        // retry(3)
        // tap(users => console.log(users)),
        // map(users => users.filter(a => a.id > 2)),
        // tap(users => console.log(users)),
      )
      .subscribe(users => {
        this.users = users;
      });
      // .subscribe(response => {
      //   if (response.status === 200) {
      //     this.users = response.body as User[];
      //   }
      // });
  }
}
