input

**USER.TS** -- parent

&#x09;*# je récupere mes users*

&#x09;service api getUsers() -> data -> users



**USER.HTML** -- parent

&#x09;*# je parcours mes users*

&#x09;ngFOr user in users:

&#x09;	# sur un click, j'apelle la fonction selectUSer()

&#x09;	click --> selectUser(user.id):



**USER.TS** -- parent

&#x09;*# ce que fait la fonction selectUser()*

&#x09;selectUser(userId):

&#x09;	# je charge  la variable selectedUSerID avec le choix 

&#x09;	this.selectedUserId == userId



**USER.HTML** -- parent

&#x09;*#Si j'ai un selectedUSerId*

&#x09;ng if selectedUserId

&#x09;*# j'envoie sous userId le selectedUSerId a la balise enfant*

&#x09;\[user\_id] == SelectedUserID

&#x09;

**USERLIST.TS** -- enfant

&#x09;*# a chaque changement*

&#x09;On change

&#x09;*# Si userId*

&#x09;if user\_id:

&#x09;	*# je load les post du user*

&#x09;	loadposts --> service getPostByUserId



**USER-LIST.HTML** -- enfant

&#x09;*# je parcours les posts en les affichant*

&#x09;for post in posts:

&#x09;	post.content











**NAVBAR.HTML** - enfant

&#x09;*# au click, j'apelle la fonction sendTab() qui selctionne et envoie un tab*

&#x09;click -> sendTab(1)

&#x09;click -> sendTab(2)



**NAVBAR.TS** -- enfant

&#x09;# *j'rinitialise l'output sender*

&#x09;output sender()

&#x09;*#j'envoie a la balise parent le tab selectionné*

&#x09;sendTab(tab):

&#x09;	sender.emit(tab)



**APP.HTML** -- parent

&#x09;*#nbinding qui recoit l'émission*

&#x09;Binding sendTab --> OnsendedTab($event)



**APP.TS** -- parent

&#x09;*# le receveur dit que ce qui est recu va dans la variable tabChoice*

&#x09;OnSendedTab(tab)

&#x09;	this.tabChoice == tab



**APP.HTML** -- parent

&#x09;*# si tabChoice, j'affiche la balise corespondante*

&#x09;ngif tabchoice == 1

&#x09;	<users-list>

&#x09;ngif tabchoice == 2

&#x09;	<doc-list>








èèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèè


node -v
npm -v

npm install -g @angular/cli

ng version

ng new mon-projet

ng serve



