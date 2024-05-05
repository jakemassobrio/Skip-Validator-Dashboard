# The Docs

---

<br/><br/><br/>

## Mindset

<br/><br/>
The main thing I try to follow is to conserve to power and flexibility of vanilla languages, while empowering each languange with modularization. I figured that this would give us best of both worlds. After all, everything is written in vanilla code, so all problems should be solvable from there. With this in mind I try to avoid one-off packages unless they provide us with a solution to a specific problem of a high complexity such as react-table. The menu link urls were sourced from other skip pages I found available online so they are rough estimations on what they should be. If I had more time, my next steps would be:

- Polish up table component, integrate percentage based table widths so the table doesn't change shape when different data is available.
- Define media querys with the `Box` component
- Write a few more tests
- Write unit tests for library components
- Create Icon search in storybook Icon Docs.

<br/><br/><br/>

## Stack

<br/><br/>

- React
- Storybook (Standalone UI Library Composition)
- Cypress (E2E testing)
- Emotion (CSS inheritance and modularization)
- react-table (Headless table)

<br/><br/><br/>

## Getting started

<br/><br/>

###### Step 1

`npm install`

###### Step 2

`npm start`

<br/><br/><br/>

## Storybook - The UI Library

<br/><br/>

Docs: https://storybook.js.org/docs/get-started

Storybook was added to modularize UI components and organize a UI Library.
This encourages us to build standalone UI components that should operate with mock data alone, as well as document use cases for each component.
Launch storybook with `npm run storybook`. You can find a pretty version of this README in storybook under Docs.
Storybook will automatically generate basic documentation for each component.

<br/><br/><br/>

## E2E Testing with Cypress

<br/><br/>

Docs: https://docs.cypress.io/guides/overview/why-cypress

I picked cypress for testing because it is an E2E testing suite with Component Librart testing support. Although the storybook library format is highly compatible with unit tests (and worth doing if time is availalble), E2E testing will always provide you more coverage for less work and therefore ideal for small teams. I wrote a couple of quick tests as a demo.

To run cypress, you will need to run `npm start`. Make sure you are running the app on `localhost:3000`.

You can then run `npx cypress open` to open the cypress interface. You will need to select "E2E Testing" and "Chrome" to access the tests.

<br/><br/><br/>

## Emotion & Theme Provider

<br/><br/>

Docs: https://emotion.sh/docs/introduction

I use emotion because it allows you to turn css into reusable react components. You can also inherit styles as well as integrate styling within a component. I find it very versatile and great for library building. Check out the `Box` Component and the `getCSS` util function.

Theme definitions should be in the `constants.tsx` file and theme types can be found in the `emotion.d.ts` file. The theme `light` and `dark` theme definitions can be improved, but I put this together quickly for demo purposes. You can change themes with the button at the top right of the UI.

<br/><br/><br/>

## react-table

<br/><br/>

Docs: https://tanstack.com/table/latest

Tables are one of those things that can take quite a lot of time to buiild from scratch, and well... Tanstack is Tanstack. `react-table` is a headless table UI that solves quite a few problems off the bat like sorting and filtering, and works seamlessly with react.

<br/><br/><br/>
