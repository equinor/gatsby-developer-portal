---
title: API Principles
tags: ['API']
authors: ["oyron"]
---

#API Principles

###API First

_API First_ is one of our core principles when designing APIs. API First has two key elements:
* Define the API before any line of code is written
* Get feedback on the API definition from users of the API

With the API first approach, we can achieve

* Evolve the API and learn about it's usage in an efficient matter, without having to adapt any code.
* Decoupling of API design and development. The API definition becomes a contract that teams can work on
without having to wait for the implementation to be completed. And the implementation can be changed / replaced
without impacting the clients.
* Specifying APIs with a standard specification language facilitates usage of tools for generating documentation, mock
code, automatic quality checks, API Management tools, etc.

Please note that API First is not in conflict with agile development practices. API definitions should be developed 
iteratively like the rest of the software. But each iteration of the API should include defining the revised API and
get early feedback. API First does not mean that you should complete your API 100% before you write a single line of
code.

Further reading:
https://swagger.io/resources/articles/adopting-an-api-first-approach/
https://www.oreilly.com/ideas/an-api-first-approach-for-cloud-native-app-development


###API as a product

An API is a product - and should be treated like one:
* Focus on the users - your customers. Put yourself in their place, understand their needs
* Put emphasize in the user experience (developer experience) - usability, simplicity, etc.
* Take care not exposing any inner workings, implementation details, or internal naming schemes in the API
* Improve the product over time
* Make use of customer feedback

The _API as a product_ principle facilitates evolving quality APIs that gives value.


###Assume your API will become externally available

Assuming your API will forever remain within the current scope can limit the potential for growth.
An important principle for our API development is to make the assumption that _your API will become externally
available_. Develop the API in such a way that it is ready to be made available outside it's current scope. This could
mean opening it to a broad audience within the company, to external business partners or as a public API on the
Internet.

When designing and developing your API, reflect on what would be needed to be ready to go external, and make
sure the necessary measures are taken along the way, for aspects like security, logging, documentation, terms of
service, etc.
