# Feedback From Spencer

First off, I would include setup instructions for getting the app going in the
readme.  What version of node do I need to make this work?  Do I need postgres
running in the background? Is there a .env file that needs to be set up with
specific variables?

I did a basic `npm install && gulp` and nodemon borked and didn't work for me.
I don't have time to debug getting this app set up to look at it and therefore
just never looked at it (which is a shame, I bet it's sweet).  

Use npm scripts.  Gulp is great and all but I'd say community as a whole has
been using it less and less.  With webpack you don't really need to use gulp you
can just defer practically everything to webpack.  Even with gulp, have npm script targets that take care of any annoying configuration.  I would ideally like to do:

```
yarn
npm start
```
And boom, the api server is running, the webpack dev server is running, and it
opened my browser to localhost:3000 or :8080 with the app ready to go.

Use yarn to lock down dependencies.  If I npm install we might get different
node_modules and thats one reason it didn't work for me vs you.  Install and use
[yarnpkg](https://yarnpkg.com/) which will speed up install times and prevent us
from having inconsistent dependencies.

## Answering Email Questions

1. **I'm particularly interested in how to make my react/redux architecture
   good in regards to container/presentational components. Along with that, I'm
   trying to make my tests for the two different kinds of components
   appropriate.**

Yeah most people fuck this up.  To a certain extent it takes messing up a bunch
and developing intuition but here are the tips I can give you:

**Presentational** 
* should never contain any application logic
* should never contain any margin, this should be left to layout components
* if needed, should be incredible simple and straightforward to refactor out into a separate UI kit.
* can usually be functional stateless since they're just taking some props and displaying things
* you can think of bootstrap components or material ui components as all being
    presentational.  Sometimes you will have composite presentational.  For
    example you might take 4-5 of your presentional components and make a new
    presentational component that is a higher level of abstraction

**Container** 
* deal with passing the right props down to one *or many presentional components
* take advantage of "layout components" to display presentational components properly.
* should be able to be placed anywhere in the website and 'just work'

As far as file structure I use a module pattern that looks something like this:

```
1 src/modules/group
2 ├── __tests__
3 │   └── reducer.spec.js
4 ├── components
5 │   ├── AddPolicy
6 │   │   ├── AddPolicy.js
7 │   │   └── index.js
8 │   ├── AddUser
9 │   │   ├── AddUser.js
10 │   │   └── index.js
11 │   ├── GroupDetails
12 │   │   ├── GroupDetails.js
13 │   │   └── index.js
14 │   ├── GroupPolicyChips
15 │   │   ├── GroupPolicyChips.js
16 │   │   └── index.js
17 │   ├── GroupUserChips
18 │   │   ├── GroupUserChips.js
19 │   │   └── index.js
20 │   └── index.js
21 ├── duck.js
22 ├── index.js
23 ├── model.js
24 ├── sagas.js
25 └── selectors.js
 ```
My `index.js` will export EVERYTHING that is involved in using this 'module'.
I can then theoretically re-use my modules in differnt applications in if I
needed to. Read more about project structure
[here](https://jaysoo.ca/2016/02/28/organizing-redux-application/).  I
basically do exactly what Jack does with some modifications.

I use a tool I created call redux-cli (should be renamed) to generate my
modules for me.  It creates the entire folder structure, boilerpalte files, and
adds all necessary imports.  This saves me a tremendous amount of time.


2. **Also, this component is a redux-connected component and is really a
   container component AND a presentational component. I figured this was
   appropriate b/c it's rendering isn't very complex or drastically changing in
   relation to state. Is this good architecture**
   [here](https://github.com/lsimmons2/oinkster/blob/master/src/client/components/about.js)

So, since 'About' is being rendered as a top level route I actually would
refactor this a bit.  What you did is fine but a pattern I generally follow that
has proved very positive for me is to have my Route components be, for the most
part, functional stateless components that are just in charge of laying out a
bunch of container components.  The advantage of this is now I can move my
container components anywhere in the website or reuse in different routes.

Here is an example of one of my Route components for reference:
```jsx
... more here
return (
  <Page title="Groups" modal={MODALS.addGroup}>
    <PageHeader>
      <PageTitle>
        <Flex>
          <Box flexAuto> Groups </Box>
          <Box><GroupsButtonBar /></Box>
        </Flex>
      </PageTitle>
      <GroupsSearch />
    </PageHeader>

    <PageContent isFull>
      <GroupsList />
    </PageContent>
  </Page>
)
```






