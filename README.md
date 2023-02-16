# MyStore E-commerce Application (Front-end)
MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.
## Project Features
The application includes a(n):
* **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities)
* **Product details** page, which displays more information about any particular product
* **Shopping cart**, which includes the products that the user has added to their cart
* **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

## Project Structure
#### A total of 6 components are included in this application
* **ProductList** - A component responsible for rendering all products.
* **ProductListItem** - A child component to the ProductList component. This component is responsible for rendering individual items to the page.
* **ProductDescription** - A component which responsible for rendering the details of each product.
* **Cart** - A component which is responsible for handling checkout information.
* **Confirmation** - A component which is responsible for showing a message to the user that loads after a successful checkout.
* **NavBar** - A component which is responsible for showing the navigation bar of the application. This component is shared to all pages of the applicaiton

#### There are two services in this application
* **CartService** - This service is mainly used to share data between different unrelated components.
* **ProductService** - This service is used for fetching data from external api (I have used the provided data.json to read the data).
#### A model is also defined to represent a Product.
## Installation
* Clone the repository: `git clone https://github.com/eleccrazy/udacity-project3-MyStore.git`
* Change the directory: `cd udacity-project3-MyStore/MyStore`
* Install dependencies: `npm install`
* Run the application: `ng serve`

#### The application will run on port 4200 (i,e http://localhost:4200).

 
