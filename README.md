# # Flashcards

This simple react app allows the user to save a set of flashcards in separate decks for the purpose of studying them. It is mostly intended for use with studying foreign languages in specific langauge contexts, so the decks are given a name and also a language property.


## Getting Started

Fork and clone from github.com/miancadonc/flashcards. In the terminal, navigate to the backend directory at flashcards/backend/flashcard-api. Run `rails db:migrate` to create the database tables in your development database. Then, start up the rails server in that same directory, and navigate back to the frontend directory at flashcards/frontend/flashcards. There, run `npm start` to start the app.

### Prerequisites

There are several gems listed in the gemfile for the backend rails api. Running `bundle install` in the terminal should install everything necessary to run the app if you don't have them already.

### Installing

As stated above, fork and clone the repository from github.com/miancadonc/flashcards, then `bundle install`, `npm start` and run the migrations. The app should now be functional.



## Built With

* [Rails](https://rubyonrails.org/) - The web framework used for the api
* [React](https://reactjs.org/) - for frontend application functionality

## Authors

* **Nat McConnaughay** - [Flashcards](https://github.com/miancadonc/flashcards)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

The program at Flatiron provided me a huge amount of examples of rails and javascript projects and the community offered its support during the creation of this app. In particular, I'd like to thank Dakota Martinez for helping me deepen my understanding of React as a framework and for clarifying the requirements of this project.