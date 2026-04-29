import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { PostByUserComponent } from '../../components/post-by-user/post-by-user';

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [CommonModule, PostByUserComponent],
  templateUrl: './users.html'
})
export class UsersListComponent implements OnInit {

  // ✅ On initialise la variable users avec un tableau vide pour éviter les erreurs d'affichage  
  users: any[] = []; // ✅ on initialise ici

  // ✅ On injecte le service ApiService et ChangeDetectorRef dans le constructeur
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  // ✅ On utilise ngOnInit pour charger les utilisateurs dès que le composant est initialisé
  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
      this.cdr.detectChanges(); // ✅ Force Angular à mettre à jour l'affichage
    });
  }
  // ✅ On ajoute une variable pour stocker l'ID de l'utilisateur sélectionné
  selectedUserId: number | null = null;

  // ✅ On ajoute une méthode pour gérer la sélection d'un utilisateur
  selectUser(userId: any) {
      console.log('CLICK USER:', userId);
    this.selectedUserId = userId;
}
}
