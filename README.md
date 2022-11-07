# Rehsok consultores

The official Rehsok web site built in [Next.js](https://nextjs.org) with [TailwindCSS](https://tailwindcss.com) in the front-end styling.

## Technologies

- [Node.js]() v16.18.0
- [Next.js](https://nextjs.org) v13.0.2
- [React.js](https://reactjs.org) v18.2.0

### Dev Technologies

- [TailwindCSS](https://tailwindcss.com) v3.2.2

## Folder Structure

I'm using the <ins>src</ins> folder for keep code at a different level than configurations and miscellaneous files.

Thi is the structure I use for my Next.js projects:

<img src="/assets/folder-structure/onion-shape.jpg" alt="Onion-shape structure" />

We can express the above image with the following structure:

```
- src
  - app
  - core
  - components (domain)
  - modules (domain)
  - pages
    - api
```

### App

Contains code that is being used by the special <code>pages/_app.jsx</code> Next.js file, like:

- Components
- The store of the global state
- Business logic
- And more...

We could develop our folder structure in this way:

```
- src
  - app
    - components
      - AppLayout.jsx
    - store
    - ...
```

#### Core

This layer is used to place all unrelated to our <ins>domain</ins>

The <ins>core</ins> and the <ins>domain</ins> of a project, in my view, should be kept well separate.

Hard rule: **the <ins>core</ins> layer can never import anything from the <ins>domain</ins> layer**.

If something within the <ins>core</ins> layer needs something from the <ins>domain</ins>, it probably does not belong to the <ins>core</ins> layer.

For example:

- The database connector functions
- The utils for authentification
- The email provider
- The reusable UI components not related to any domain (ex. Button, Icons, List)
- And more...

The <ins>core</ins> layer provides the <ins>domain</ins> with the necessary tools for the application to work, for example, authenticating, querying the DB, or sending emails. But does not know how the consumer uses these tools.

We could develop our folder structure in this way:

```
- src
  - core
    - componente
      - input
        - Button.jsx
      - data-display
        - List.jsx
      - ...
    - hooks
      - input
        - useRefMousePosition.js
      - sizing
        - useDimensions.js
      - ...
    - database
        - connector.js
```

#### Domain

The business domain is the area of control or a sphere of knowledge, such as, the group of entities, relationships, and behaviors of the business model, implemented as code.

We can express the <ins>domain</ins> layer with the following structure:

```
- src
  - components
  - modules
  ```

##### Modules

What should add to this folder anything about the <ins>domain</ins> that isn't a component, like:

- Custom hooks
- Configurations
- Contexts
- Queries
- Props functions (getServerSideProps, getInitialProps)
- And all utilities related to the domain

These utilities are typically used within components and partly within the pages for functions such as getServerSideProps.

We could develop our folder structure in this way:

```
- src
  - modules
    - search
      - hooks
      - config
      - utils
      - ...
  - navigation
    - hooks
    - config
    - ...
```

##### Components

The components that make up our pages. Furthermore, these components are highly tied to the <ins>domain</ins> and are not supposed to be highly reusable across projects.

They're business-logic rich, and we can build them using the reusable UI components from <ins>core</ins>.

The business-logic side of things, such as queries, or functions that mutate data, are all imported from modules so that they can be reusable across components.

We could develop our folder structure in this way:

```
- src
  - components
    - search
      - Search.jsx
      - SearchSuggestions.jsx
    - navigation
      - Navbar.jsx
```

#### Pages

Next.js's router is file-system based, the folder <ins>pages</ins> a Next-specific directory to place our routes or pages.


We could develop our folder structure in this way:

```
- src
  - pages
    - api
      - Search
        - [keyword].js
      - products
        - [id].jsx
```

### Imports between Layers

Something important to clarify is the rules I have around importing between layers.

Typically, an inner layer cannot import from an outer layer, that means that **<ins>core</ins> cannot import from the <ins>domain</ins> layer, and the latter cannot import from <ins>pages</ins>**.

**Wrong**

<img src="/assets/folder-structure/onion-shape-flow-wrong.jpg" alt="Onion-shape structure" />

**Ok**

<img src="/assets/folder-structure/onion-shape-flow-ok.jpg" alt="Onion-shape structure" />

This rule can ensure your <ins>core</ins> is decoupled from the <ins>domain</ins> to avoid cyclical dependencies and keep your architecture untangled.

#### Linting import paths with EsLint

We can ensure that we're using the rules above correctly when importing files in our application.

EsLint can help us by adding the following configuration, can automatically warn you that you're importing from the wrong paths:

```
"rules": {
  "import/no-restricted-paths": [
    "error",
    {
      "zones": [
        {
          "target": "./src/core",
          "from": "./src/components"
        },
        {
          "target": "./src/core",
          "from": "./src/lib"
        },
        {
          "target": "./src/core",
          "from": "./src/pages"
        },
        {
          "target": "./src/lib",
          "from": "./src/pages"
        },
        {
          "target": "./src/components",
          "from": "./src/pages"
        }
      ]
    }
  ]
}
```

## Getting started

I recommend use [Yarn](https://yarnpkg.com/).

1. Clone the project

```
$ git clone https://github.com/saufth/portfolio.git
```

2. Install the dependencies:

```
$ yarn (recommended)
# or
$ npm install
```

3. Run the development server

```
yarn dev (recommended)
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits

* [Fer Torres](http://github.com/saufth)

## Licence

MIT License

Copyright (c) 2022 Fer Torres

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
