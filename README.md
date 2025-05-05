# Clinical Application (On going project)
## Project Status
This project is currently in progress and actively being developed. 🧑‍💻👨‍💻👨‍💻

## Description
Clinical Booking


## Clean Architecture

This project follows Uncle Bob's Clean Architecture principles to ensure a scalable, maintainable, and testable codebase. Clean Architecture promotes separation of concerns and emphasizes the independence of the business logic from the frameworks and external dependencies.

### Overview
The objective of *Clean Architecture* by [Robert C. Martin] is the separation of concerns in software. 
This separation is achieved by dividing the software into layers. Each layer is encapsulated by a higher level layer and the way to communicate between the layers is with the *Dependency Rule*.

<img src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg" width="400" alt="Chat Application">


#### Dependency Rule
This rule says that nothing in an inner circle can know anything at all about something in an outer circle. The dependency direction is from the outside in. Meaning that the *Entities* layer is independent and the *Frameworks & Drivers* layer (Web, UI, DB etc.) depends on all the other layers.
#### Entities
Contains all the business entities an application consists of. In our example the *User* and the *Post*.
#### Use Cases
Contains application specific business rules. These use cases orchestrate the flow of data to and from the entities. In our example some of the use cases are: *Login*, *Register*, *BookAppointments* etc.
#### Interface Adapters
This layer is a set of adapters (controllers, presenters, and gateways) that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the DB or the Web. In other words, is an entry and exit points to the Use Cases layer. In our example we implemented controllers and presenters together and these are the PostController and the UserController.
#### Frameworks and Drivers
The outermost layer is generally composed of frameworks and tools such as the Database, the Web Framework, etc.

### Key Principles

The key principles of Clean Architecture that we adhere to in this project include:

1. **Separation of Concerns:** The codebase is organized into distinct layers, with each layer having a clear responsibility and minimal coupling with other layers.

2. **Dependency Rule:** The dependencies between layers are arranged in a concentric manner, with inner layers containing the most abstract and business-centric code, and outer layers containing more concrete implementations and frameworks.

3. **Isolation of Business Logic:** The core business logic is decoupled from any specific frameworks or technologies, making it easier to test, maintain, and adapt to changes.
<!-- 
### Project Structure

Our project structure reflects the principles of Clean Architecture, with the following components:

- **Domain Layer:** Contains the core business entities, use cases, and interfaces defining the business logic. This layer is independent of any frameworks or external dependencies.

- **Data Layer:** Handles the interaction with external data sources and frameworks. It implements the interfaces defined in the domain layer and provides concrete implementations of data repositories and data mappers.

- **Presentation Layer:** Deals with the user interface and the presentation of data. It communicates with the domain layer through interfaces, executes use cases, and handles user input and output.

- **Framework Layer:** Includes the frameworks, libraries, and tools that support the application's execution. It integrates with the presentation and data layers while keeping the core business logic isolated.

### Testing

Clean Architecture promotes testability, and we have adopted a comprehensive testing strategy in this project. Each layer is unit-tested using appropriate testing frameworks and techniques, ensuring that the codebase is robust and reliable.

### Documentation

To assist with understanding the project's architecture and code structure, we have provided detailed documentation in the form of comments, diagrams, and inline explanations. Developers can refer to these resources to gain a deeper understanding of the project's implementation.

### Contributing

We welcome contributions to this project. If you would like to contribute, please review the [contribution guidelines](link-to-contribution-guidelines) to get started. -->