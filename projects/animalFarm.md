---
layout: project
type: project
image: img/animal_farm_full.jpg
title: "Animal Farm"
date: 2021
published: true
labels:
  - C
  - C++
  - Doxygen
summary: "Web interface to communicate with and control a mini production Mars rover."
---

<img class="img-fluid" src="../img/animal_farm_full.jpg">

Animal Farm is a series of labs intended to teach the basics of C and C++. It's also intended to introduce good Software Engineering practices. Students are expected to "Live" in this project as the code evolves over a series of requirements.

#### Links
The project's home page (hosted by GitHub) is [here](https://github.com/marknelsonengineer/ee205_lab10d_animal_farm_2)


#### Project Description
Animal Farm Spring 2022                                                                                                                                                                     
The project was built upon in iterations as follows. 

Animal Farm 0: 
An array-based database of cats, where each attribute is an array.

Animal Farm 1: 
An array-based database of cats, where each a cat's attributes are collected in a struct.

Animal Farm 2: 
A procedural singly linked-list database of cats, where each cat is an object. 

Animal Farm 3:
A collection class that implements a singly linked database of Animal objects using:
- An abstract List
- A concrete SinglyLinkedList
- generic Node
Add an abstract Animal (which also inherits from Node) & Mammal to the Cat object model.

Aninmal Farm 4: 
A collection class that implements a doubly linked list.
Add Fish, Bird and Dog to the object model.
Build a class factory for Cat.
Add destructors to the object model.
Create a CatLinkedList that inherits from SinglyLinkedList… and then implement findCatByName
Have Cat override > to sort cats by name
…think about how we are going to sort our animals
| Animal Farm 0       | An array-based database of cats, where each attribute is an array.                                                                                                  Animal Farm 5:
Refactor the collection class into a Binary Search Tree.
Add Birds and Fish to the object model.

Source: <a href="https://github.com/jgaleria/ee205-animal-farm/tree/master"><i class="large github icon "></i>jgaleria/ee205-animal-farm</a>
