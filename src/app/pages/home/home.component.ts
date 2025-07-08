
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  newPost: string = '';
  posts: string[] = [];
  editingIndex: number | null = null;
lastAddedIndex: number | null = null;
friendSuggestions = [
  { name: 'Alice Johnson' },
  { name: 'Mark Thompson' },
  { name: 'Samantha Lee' },
  { name: 'David Smith' }
];

addFriend(friendName: string) {
  alert(`${friendName} has been added as a friend!`);
  // You can also remove from the list if you want to simulate a "real add"
  this.friendSuggestions = this.friendSuggestions.filter(f => f.name !== friendName);
}

 addPost() {
  if (this.newPost.trim()) {
    this.posts.push(this.newPost);
    this.lastAddedIndex = this.posts.length - 1; // Highlight the newest one
    this.newPost = '';
  }
}


  editPost(index: number) {
    this.editingIndex = index;
    this.newPost = this.posts[index];
  }

  updatePost() {
    if (this.editingIndex !== null && this.newPost.trim()) {
      this.posts[this.editingIndex] = this.newPost;
      this.cancelEdit();
    }
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newPost = '';
  }
}
animations: [
  trigger('fadeSlide', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]),
  trigger('highlightOnAdd', [
    transition(':enter', [
      style({ backgroundColor: '#ffffcc', opacity: 0 }),
      animate('600ms ease-out', style({ backgroundColor: '#f4f6ff', opacity: 1 }))
    ])
  ])
]
