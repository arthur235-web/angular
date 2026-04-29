import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'post-by-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-by-user.html'
})
export class PostByUserComponent implements OnChanges {

    // ✅ On utilise @Input() pour recevoir l'ID de l'utilisateur depuis le composant parent
  @Input() userId!: number;
  // ✅ On initialise la variable posts avec un tableau vide pour éviter les erreurs d'affichage
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  // ✅ On utilise ngOnChanges pour détecter les changements de l'ID de l'utilisateur et charger les posts correspondants
  ngOnChanges() {
    if (this.userId) {
      this.loadPosts();
    }
  }

    // ✅ On ajoute une méthode pour charger les posts de l'utilisateur sélectionné
  loadPosts() {
    this.apiService.getPostsByUser(this.userId)
      .subscribe(data => {
        this.posts = data;
      });
  }
}