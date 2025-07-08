import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: string[] = [];
  newPost: string = '';
  editingIndex: number | null = null;

  addPost() {
    if (this.newPost.trim()) {
      this.posts.push(this.newPost.trim());
      this.newPost = '';
    }
  }

  editPost(index: number) {
    this.editingIndex = index;
    this.newPost = this.posts[index];
  }

  updatePost() {
    if (this.editingIndex !== null && this.newPost.trim()) {
      this.posts[this.editingIndex] = this.newPost.trim();
      this.cancelEdit();
    }
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    if (this.editingIndex === index) {
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newPost = '';
  }
}
