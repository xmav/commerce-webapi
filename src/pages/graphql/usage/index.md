---
title: Run Graphql queries and mutations | Commerce Web APIs
description:
---

# Run Graphql queries and mutations

## Queries

A GraphQL query retrieves data from the application server in a similar manner as a REST GET call. The current set of Adobe Commerce and Magento Open Source GraphQL queries allow a mobile app or browser to render a wide variety of information, including the following:

*  A set of products to be displayed. This can include the entire catalog or those that match customer-specified criteria.
*  Customer data. With a customer token, a query can retrieve basic information about a customer as well as billing and shipping addresses, wish lists, order history, and other sensitive data.
*  Shopping cart contents. GraphQL supports both guest and logged-in customer carts.
*  Store configuration values, including theme and CMS settings, the currency code, and supported countries.

The REST GET endpoints retrieve a wide variety of information on behalf of the merchant. Many of these endpoints are for retrieving backend information. For example, the `GET /V1/customers/search` endpoint can be used to find a subset of customers that meet certain criteria, such as those that live in a particular state or have a birthday this month. Likewise, the `GET /V1/invoices` endpoint can return all the recently-generated invoices. This type of functionality is not required for the frontend, so it is not available in GraphQL queries. The queries are designed to improve the customer's user experience by quickly retrieving the data needed to render pages.

Over time, the GraphQL queries will duplicate the functionality of all storefront-facing GET calls, while making it possible to query more data in one request. The main difference will be that GraphQL will support storefront use cases, while REST will support admin use cases.

## Structure of a query

A query contains the following elements:

*  The optional keyword `query`. If no keyword is specified at the beginning of a request, the processor assumes the request is a query.
*  An operation name for your local implementation. This name is required if you include variables. Otherwise, it is optional.
*  The query name
*  The terms to search for. The terms can be in the form of objects, attributes, or a combination. Queries that don't require search terms obtain their context from the customer's authorization token or store ID, both of which are specified in the header of the call.
*  The output object, which specifies which data the query returns.

The following example shows the structure of the `cart` query:

```graphql
query myCartQuery{
  cart(cart_id: String!): Cart
}
```

In the preceding example, `myCartQuery` identifies your implementation of the `cart` query. `cart_id` is a non-nullable string that defines the cart to query. (The exclamation point indicates the value is non-nullable.) The `Cart` output object defines which fields to return.

Now let's fully define a query:

```graphql
query myCartQuery{
  cart(cart_id: "1WxKm8WUm3uFKXLlHXezew5WREfVRPAn") {
    items {
      id
      quantity
    }
    billing_address {
      firstname
      lastname
      postcode
      }
    shipping_addresses {
      firstname
      lastname
      postcode
    }
  }
}
```

In this example, we've supplied a cart ID as input, (which was generated by the `createEmptyCart` mutation). The output includes the `cart_id` as well as selected information about the items in the cart and the billing and shipping addresses.

The following example shows the query response:

```json
{
  "data": {
    "cart": {
      "items": [
        {
          "id": "5",
          "quantity": 1
        }
      ],
      "billing_address": {
        "firstname": "Veronica",
        "lastname": "Costello",
        "postcode": "49628-7978"
      },
      "shipping_addresses": [
        {
          "firstname": "Veronica",
          "lastname": "Costello",
          "postcode": "49628-7978"
        }
      ]
    }
  }
}
```

<InlineAlert variant="success" slots="text" />

Adobe Commerce and Magento Open Source will not run a query that is too complex. The number of fields, objects, and nodes are factors in determining the complexity of a query.

## Query variables

Specifying variables in a query can help increase code re-use. Consider the following requirements when generating a query that contains one or more variables:

*  All variables must be declared up-front, immediately after the operation name.
*  Variables are typed: they can be scalar or an object.
*  You must use all declared variables. Object variables are defined in JSON.

The following example declares the `$cart_id` variable. It is referenced in the `input` statement.

```graphql
query myCartQueryWithVariable($cart_id: String!) {
  cart(cart_id: $cart_id) {
    items {
      id
      quantity
    }
    billing_address {
      firstname
      lastname
      postcode
    }
    shipping_addresses {
      firstname
      lastname
      postcode
    }
  }
}
```

Variables are defined separately in JSON:

```json
{
  "cart_id": "1WxKm8WUm3uFKXLlHXezew5WREfVRPAn"
}
```

## Mutations

While GraphQL queries perform read operations, mutations change the data. A mutation can create, update, or delete objects and fields. In REST terminology, queries operate like `GET` requests, while mutations are similar to `POST`, `PUT`, and `DELETE`.

### Structure of a mutation

A mutation contains the following elements:

*  The keyword `mutation`
*  An operation name for your local implementation. This name is required if you include variables. Otherwise, it is optional.
*  The mutation name
*  The input object or attributes. Most mutations require an input object that contains data or individual attributes for the application server to process. However, some mutations, such as `createEmptyCart`, do not require an input object. In this particular case, the authorization token passed with the request provides the needed context.
*  The output object, which specifies which data the mutation returns.

The following example shows the structure of the `createCustomer` mutation:

```graphql
mutation myCreateCustomer {
  createCustomer(
    input: CustomerInput!
  ) {
    CustomerOutput
  }
}
```

In this example, `myCreateCustomer` identifies your implementation.  `CustomerInput` is a non-nullable object that defines a customer. (The exclamation point indicates the value is non-nullable.) The `CustomerOutput` object defines which fields to return.

Now let's take a look at a fully-defined mutation. This time, we'll specify the minimum fields needed as input to create a customer (`firstname`, `lastname`, `email`, and `password`). We could include the same fields in the output, but GraphQL allows you to return only the data you need, which is the customer `email`.

```graphql
mutation myCreateCustomerNoVariables {
  createCustomer(
    input: {
      firstname: "Melanie"
      lastname: "Shaw"
      email: "mshaw@example.com"
      password: "Password1"
    }
  ) {
    customer {
      email
    }
  }
}
```

The mutation returns the customer email:

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "email" : "mshaw@example.com"
      }
    }
  }
}
```

### Mutation input

A mutation can require either an object as input (as shown above) or one or more scalar values. When specifying an object, you must include the `input: {}` keyword. When the mutation requires scalar values, specify the field name and value, as shown below:

```graphql
mutation myGenerateCustomerToken {
  generateCustomerToken(
    email: "mshaw@example.com"
    password: "Password1"
  ) {
    token
  }
}
```

### Mutation variables

Specifying variables in a mutation can help increase code re-use. Consider the following requirements when generating a mutation that contains one or more variables:

*  All variables must be declared up-front, immediately after the operation name.
*  Variables are typed: they can be scalar or an object.
*  You must use all declared variables. Object variables are defined in JSON.

The following example declares the `$CustomerInput` variable. It is referenced in the `input` statement.

```graphql
mutation myCreateCustomerWithVariables($CustomerInput: CustomerInput!) {
  createCustomer(
    input: $CustomerInput
  ) {
    customer {
      email
    }
  }
}
```

The `$CustomerInput` variable is defined as a JSON object:

```json
{
  "CustomerInput": {
    "firstname": "Melanie",
    "lastname": "Shaw",
    "email": "mshaw@example.com",
    "password": "Password1"
  }
}
```

This example updates the customer's email using two scalar variables (`$email`, `$password`).

```graphql
mutation myUpdateCustomer($email: String!, $password: String!) {
  updateCustomer(
    input: {
      email: $email
      password: $password
    }
  ) {
    customer {
      email
    }
  }
}
```

The variables are defined separately.

```json
{
  "email": "melanie.shaw@example.com",
  "password": "Password1"
}
```