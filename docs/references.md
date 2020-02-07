---
title: References
sidebarDepth: 2
---

## General Programming Terms & Languages

### Array

An array is an ordered collection of data (either primitive or [object](#object) depending upon the language). Arrays are used to store multiple values in a single [variable](#variable). This is compared to a variable that can store only one value.

Each item in an array has a number attached to it, called a numeric [index](#index-programming), that allows you to access it. In [JavaScript](#javascript), arrays start at index zero and can be manipulated with various methods.

```JS
const principals = ['Jared', 'Kim', 'Mike', 'Scott', 'Tito'];

console.log(principals[0]);
// Output: 'Jared'
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/array)

### Constant

A constant is a value that the programmer cannot change, for example numbers (1, 2, 42). With [variables](#variable), on the other hand, the programmer can assign a new value to a variable name already in use.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/Constant)

### CSS

Cascading Style Sheets (CSS) is a [stylesheet](#stylesheet) language used to describe the presentation of a document written in [HTML](#html) or XML (including XML [dialects](#namespace) such as [SVG](#svg), MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

### end, Back

In many cases, most of the code to support a dynamic website must run on a server, and not the machine that displays the website. The server environment is oftern referred to as the "back-end", and creating this code is known as server-side or back-end development.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)

### end, Front

Essentailly, the converse of [back-end](#end-back). The portion of a website that runs on the machine displaying it, such as the design, static content, and interactive scripting, is known as the "front-end". Creating this code is often referred to as front-end development.

### Expression

### Function

### HTML

HTML ([HyperText](#hypertext) Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. HTML uses [markup](#markup) to annotate text, images, and other content for display in a Web browser. HTML markup is organized with [elements](#element). An HTML element is set off from other text in a document by [tags](#tag), which consist of the element name surrounded by `<` and `>`.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)

### HyperText

Links that connect web pages to one another, either within a single website or between websites.

### Index (file structure)

In the directory structure of a website or web application, a file with the name of `index` typically serves as the entry point for the contents of the folder it's in. Certain default behaviors are associated with files named `index`, depending on the file type and the runtime environment.

For example, a file named `index.html` will automatically be served as a website's default page at `http://website.com/` by most web servers. A file named `index.js` typically contains a list of the [modules](#module) exported by the contents of the folder it's in.

### Index (programming)

A numerical description of a value's position within a set, such as an [array](#array). Indicies are consecutive integers, increment by 1, and typically begin at 0 for the first item in the set.

### JavaScript

JavaScript (JS) is a lightweight programming language with first-class [functions](#function). While it is most well-known as the scripting language for Web pages, many [non-browser environments](#end-back) also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting [object-oriented](#object-oriented-programming), imperative, and declarative (e.g. functional programming) styles.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Markup

A markup language is one that is designed for defining and presenting text. [HTML](#html) (HyperText Markup Language), is an example of a markup language. Within a text file such as an HTML file, [elements](#element) are marked up using [tags](#tag) which explain the purpose of that part of the content.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/markup)

### Method

### Object

Object refers to a data structure containing data and instructions for working with the data. [JavaScript](#javascript), Java, C++, Python, and Ruby are examples of [object-oriented](#object-oriented-programming) programming languages.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/object)

### Object-oriented [programming]

Object-Oriented Programming is an approach in programming in which data is encapsulated within [objects](#object) and the object itself is operated on, rather than its component parts.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/OOP)

### Scope

The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a [variable](#variable) or other [expression](#expression) is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

A [function](#function) serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.

For instance, the following is invalid:

```JS
function exampleFunction() {
    const x = "locally scoped"; // x can only be used in exampleFunction
    console.log(x); // Output: 'locally scoped'
}

console.log(x); // Output: 'undefined'
```

However, the following code is valid due to the variable being declared outside the function, making it global:

```JS
const x = "globally scoped"; // x can be used anywhere

function exampleFunction() {
    console.log(x); // Output: 'globally scoped'
}

console.log(x); // Output: 'globally scoped'
```

[MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

### Stylesheet

### Variable

A variable is a named location for storing a value. That way an unpredictable value can be accessed through a predetermined name.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/Variable)

## HTML

### Attribute (HTML)

### Content model

### content, Embedded

### content, Flow

### content, Heading

### content, Interactive

### content, Metadata

### content, Phrasing

### content, Sectioning

### Document

### Document body

### Document head

### Element

### id

### Namespace

### Semantic

### SVG

### Tag

## CSS

### Attribute (CSS)

### BEM

### Box model

### Cascading

### Class

### Property

### Pseudo element

### Selector

### Specificity

## JavaScript

### Block

A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets `{ }` and may optionally be labelled, with a prefix statement such as `if`.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

### Console

### Const

```JS
const feetPerMile = 5280;

feetPerMile = 100;
// Will cause an error, like: TypeError: invalid assignment to const `feetPerMile'

console.log(feetPerMile);
// Output: 5280
```

Constants are [block](#block)-[scoped](#scope), much like variables defined using the [let](#let) statement. The value of a constant can't be changed through reassignment, and it can't be redeclared.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

### Framework

### JSON

### Let

```JS
let currentTemperature = 65;
console.log(currentTemperature);
// Output: 65

currentTemperature = 61;
console.log(currentTemperature);
// Output: 61
```

The `let` statement declares a [block](#block) [scope](#scope) local variable, optionally initializing it to a value.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

### Module

### Package

### Package manager

### Parameter

### Prop

### Property

### Request
