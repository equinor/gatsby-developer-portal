---
title: API Principles
tags: ['API']
authors: ["oyron"]
date: 2019-03-04
---

#API Principles

###API First

_API First_ is one of our core principles when designing APIs. API First has two key elements:
* Define the API using a standard specification language before any line of code is written
* Get feedback on the API definition from team members and client developers

With the API first approach, we can achieve

* Evolving the API and learn about it's usage in an efficient matter, without having to write any code
* Decoupling of API design and development. The API definition becomes a contract that teams can work on
without having to wait for the implementation to be completed. And the implementation can be changed / replaced
without impacting the clients.
* Specifying APIs with a standard specification language facilitates usage of tools for generating documentation, mock
code, automatic quality checks, API Management tools, etc.

Please note that API First is not in conflict with agile development practices. API definitions should be developed 
iteratively like the rest of the software. But each iteration of the API should include defining the revised API and
get early feedback. API First does not mean that you should complete your API 100% before you write a single line of
code.


###API as a product

APIs are not just the mechanism for doing integration, the goal is to build a platform of APIs to support an 
agile business, to foster innovation and enable new business opportunities. A key factor to enable this evolution
is treating our APIs as products. 

Key elements in the _API as a product_ principle: 
* Focus on the users - your customers. Put yourself in their place, understand their needs
* Put emphasize in the user experience (developer experience) - usability, simplicity, etc. Take care not exposing any 
inner workings, implementation details, or internal naming schemes in the API
* Improve the product/API over time
* Make use of customer feedback


###Assume your API will become externally available

Assuming your API will forever remain within the current scope can limit the potential for growth.
An important principle for our API development is to make the assumption that _your API will become externally
available_. Develop the API in such a way that it is ready to be made available outside it's current scope. This could
mean opening it to a broad audience within the company, to external business partners or as a public API on the
Internet.

When designing and developing your API, reflect on what would be needed to be ready to go external, and make
sure the necessary measures are taken along the way, for aspects like security, logging, documentation, terms of
service, etc.
