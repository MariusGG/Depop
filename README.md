# Depop

## Overview

This is my attempt at an API tech Test for Depop.
This task is to create a basic shop page

A simple design can be found here for guidance: <https://drive.google.com/open?id=1XssSAHxZD2T66V0SxysKkkBSVqbGW5QX>


## Installation

* clone this repository
```
$ git clone or download https://github.com/MariusGG/Depop
```
* cd into the depop
```
$ cd depop
```
* install the package.json
```
$ yarn install
```
* Start the server
```
$ yarn start
```


## Areas of Improvement
Further improvements would be to create a light weight middleware for likes and product details.

I would also like to create a card function in the class which would look like this below:
to be called in the componentDidMount function
let url = 'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products';
     const cards = []

         try {
             let card =  await axios.get(url)
             let data = card.map(items => {
                 // card logic
                 cards.push(item)
             }


         } catch(err) {
             console.log(err)
         }

to be called in the componentDidMount function.


I have commented out the productDetails and ProductImg, which are functional components and I intend on building up. I felt this would remove the use of logic in every component and allow the functional components to be purely presentational purposes.
