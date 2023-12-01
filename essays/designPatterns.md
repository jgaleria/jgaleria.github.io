---
layout: essay
type: essay
title: "Design Patterns"
# All dates must be YYYY-MM-DD format!
date: 2023-11-30
published: true
labels:
  - Design Patterns
---

<img width="200px" class="rounded float-start pe-4" src="../img/designPatterns.jpeg">


## Introduction

In the context of software engineering, a design pattern is typically a repeatable solution to a commonly occurring problem in software design. This pattern isn’t something that can just be copy and pasted into your code and expected to work. It’s meant to be flexible for your specific use case. Generally, each pattern follows a set of rules or requirements for it to be applicable. The design pattern serves as a template for how to solve a problem in different situations.

These patterns can speed up the development process through the use of templates. An analogy could be a cookie cutter or a stencil. If you’re baking a cookie or want to draw something in a certain way, you can use the stencil as a starting point. Reusing design patterns can help prevent some issues in the future since the developer would know how their code is structured, aiding in code readability and maintainability.

## Types of Design Patterns

There are several types of design patterns, including creational, structural, behavioral, architectural, and more.

### Creational 
Creational design patterns focus on object or class creation. These creations address the process of instantiation and ensure that the system can create objects based on the code functionality. An example of a creational pattern is the Singleton pattern, which ensures that a class only has one instance and provides a global point of access to it. The Singleton pattern is useful when a single point of control is required. Another creational pattern is the Factory Method Pattern, which creates an interface for making objects but leaves the object type choice to the subclasses.

### Structural

Structural design patterns simplify classes and objects to form larger and more complex structures. These patterns help developers create more flexible systems for classes to interact with one another. An example of a structural pattern is the Adapter Pattern, which allows incompatible interfaces to work together by creating a wrapper interface. Another example of a structural pattern is the Decorator Pattern, which enables the dynamic attachment of additional responsibilities to objects without altering their code. Overall, this type of design pattern helps with code organization, collaboration, and reusability.

### Behavioral

Behavioral design patterns deal with patterns for communication and collaboration between objects to create flexible and efficient systems. An example of a behavioral pattern is the Observer pattern, which establishes a one-to-many dependency between objects. This allows an object to change states, then notify all existing dependents to be updated. Another pattern includes the Command pattern, which encapsulates a request as an object. The behavioral pattern provides developers with a code framework that handles complex interactions and behaviors.

## Rate My Facilities

My team has used many design patterns in the creation of our Rate My Facilities web application. A design pattern in the structure of the application includes container and presentational components. In the project structure, containers are responsible for data fetching and business logic, while presentational components focus on rendering UI elements. An example of the containers being used is in data collection forms when we add a facility or review. The container has a collection of input numbers and string fields that are then used as input for the collections. Some of the UI elements we have are the nav-bar and specific cards and button links for each review. A behavioral pattern we’ve incorporated into the project is conditional rendering. This behavior is employed based on the readiness of data subscriptions, which we denote with the ‘ready’ variable. We have three different collections that use this behavior: facilities, reviews, and buildings. Some other patterns that we use are React hooks, Meteor data integration, schema validation, and more.



