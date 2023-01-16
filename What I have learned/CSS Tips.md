### How to use CSS correctly.
- You must respect the order of the HMTL document
- The use of constants provides clarity and uniformity throughout the document
	 ```
	 :root{
		--title-color: hsl(207, 4%, 16%);
		...
	}
	.title{
		color: var(--title-color);
	}
	```
	 
- Class names should be clear, try to keep formatting. 
	 ```
	(.nav__toggle, .projects__container, ...)
	 ```
- If several selectors are used together, it is placed on top of those single selectors
	 ```
	.nav__logo, .nav__toggle {...}   
  	.nav__logo{...}
  	.nav__toggle{...}
  	 ```
	 
 - The use of comments is important, and can be used to divide sections (Header, Menu, Footer...).
 - Using other measures beyond px, percentages, em and rem are very good options
	> EM: relative to the size of the parent element, if it changes, it modifies the children.
	
	> REM: relative to the size of the root, it allows more control
  
  - Use grid, allows to manage several elements and order them as needed
	 ```
	.grid-container{
	  display: grid;
	  row-gap: 3.5rem; /*3.5rem space between the columns*/
	  grid-template-columns: repeat(3,1fr); /*Three columns with a size of 1 row-fraction*/
	  grid-template-rows: repeat(2,100px) /*Two rows with a size of 100px*/
	}
	 ```
	
	- I'll write more about grid next.
- Use media queries if you want different layouts depending on the screen size
	 ```
	/*For screens wider than 1200px wide*/
    	@media screen and(min-width: 1200px){ 
		.section__border{
	      	 padding-bottom: 6rem;
		}
	}
 	```
