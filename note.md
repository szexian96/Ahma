# AHMA BAKERY
## color code
- A35127 red
- F4B651 orange
- E8D1A3 yellow
- https://coolors.co/fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a
  
## 1.Installation
- fork template file from github
~~~
git clone --single-branch -b react-mini https://github.com/szexian96/youtube.git .
~~~
- npm install
- font then add the link to the index.html
~~~
https://fonts.google.com/specimen/Urbanist
~~~
- npm build to build a server
- create a new folder on src in pages
- Snippets for shortcut
  - ES7 React/Redux/GraphQL/React-Native 
  - rfc: create a react function
  - rafc: create an arrow function (almost the same)

- link homepage
  - link the Home.jsx to App.jsx

## 2. Ecommerce App Navbar Design
- Create components
- Put Navbar in the components part
  - rafce: function with export
- move navbar to home page
- use style components
  - npm install style-components
  - check Navbar.jsx
~~~
import styled from 'styled-components'
~~~
- rename a div to a new name like container and just write the css inside it.
  - check Navbar.jsx
- using style components can save time to write like assign the css 1 by 1
~~~
<div class="xxxxx"> // no need do something like this
~~~
- download icon
  - https://mui.com/components/material-icons/
  - npm install @material-ui/core @material-ui/icons (installing material-ui)
  - but remember it will show mui but the material icons is the same
- after this, check the program

## 3. Ecommerce App Annoucement Bar
- Put Announcement.jsx in the components part
- Open a container and put at the upper there

## 4. Create Pure React Slider
- Container inside put arrow
- as a components part also
- display: flex; //let the icon show in horizontal
- check slider
- put all data into data.js

## 5. Create Categories
- categories.jsx and categoryitem.jsx
- data store at data.js
- categories rearrange data (a lot categories)
- categoryItems is to reassemble it (1 category)
- css can add overlay for photo
- use map to take out item

## 6. Shopping Product List UI
- Product.jsx and Products.jsx
- Product.jsx: fetch data out from data.js (1 product)
- Products.jsx: rearrange data (A lot products)

## 7. Styled Components Hover & Animations
- &:hover
- check product page
- &:hover ${Info} {
  - the Info element must be at uppper

## 8. React Newsletter Design Components
- Newsleter.jsx
- newsletter part very easy


## 9. Footer Components
- Footer.jsx
- split to 3 parts
~~~
  background-color: #${props => props.color};
~~~
- take color from props

## 10. Shopping Category Page
- ProductList.jsx
- new page for Shopping Category
- just use product category page is ok

## 11. Single Product Page
- Product.jsx
- Wrapper:
- Container:

## 12.Register and Login Page
- easy
- Register.jsx, Login.jsx
- Form Pattern Important

## 13.Cart
- Cart.jsx
- if the button is filled then black
~~~
props.type === "filled" ? "black" : "transparent"}; /*? is the meaning of if*/
~~~
- if the props.type of type and value equal total, then font-weight = 500
~~~
  font-weight: ${(props) => props.type === "total" && "500"}; /*when value and type equal to total, then become 500*/
~~~

## 14. Mobile Phone Responsive
- if max width equal to what then display none, it can be something like this
~~~
const Container = styled.div` 
  height: 60px;
  @media only screen and (max-width:380px){
    display: none;
  }
`;
~~~
- responsive.js can be use to solve all the mobile screen fast