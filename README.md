# Orange SumOrange Summmer Challenge - 2022er Challenge - 2022

## AssignmAssignment ent https://github.comhttps://github.com/odc-student/orange-sum/odc-student/orange-summmer-challengeer-challenge

## OverviewOverview

To complete this challenge, you will need to write a simple web app, and provide us the source files to be built. The purpose of this challenge is to assess your skills
and approach to composing a simple web app given a set of pages and an API feed. We will also assess the generated HTML, CSS, and JS output.

This challenge is expected to take about 4-6 hours.

## The challengeThe challenge

## DetailsDetails

Build a stock management MMERNERN Stack (MongoDB, Express JS, React-Redux, Node JS) web application with the following requirements:

```
Admin
```
❏ As an AdmAdminin I can sign in.

❏ As an AdmAdminin I can create new manager/product.

❏ As an AdmAdminin I can edit an existing manager/product.

❏ As an AdmAdminin I can view all the existing managers/products.

❏ As an AdmAdminin I can delete any particular manager/product.

❏ As an AdmAdminin I can sign out.

```
Manager
```
❏ As a mmanageranager I can sign in / up.

❏ As a mmanageranager I can not see the list of managers.

❏ As a mmanageranager I can add a new product.

❏ As a mmanageranager I can edit an existing product.

❏ As a mmanageranager I can view all the existing products.

❏ As a mmanageranager I can delete any particular product.

❏ As a mmanageranager I can check the stock of any particular product.

❏ As a mmanageranager I can increment and decrement the stock of any particular product.

❏ As a mmanageranager I can view all the details of any particular product.

❏ As a mmanageranager I can sign out.

## InstructionsInstructions

```
The UI of the application should be appealing and easy to use
The application should justify the area of the problem statement
Clean and sustainable code will be appreciated. Code should be readable/easily
understandable
Separate frontend and backend folders
```
## Frontend DetailsFrontend Details

You will need to build the following 4 pages with React:

```
A LoginLogin Page (Admin and manager should login to the application to see the data)
A HomHomee Page (As a manager or Admin I can see Total Number of products, Only as a Admin I can see total number of managers )
A mmanagersanagers Page (Only as a Admin I can CRUD managers)
A productsproducts Page (As a Admin/manager I can CRUD products)
```
## Backend structureBackend structure


#### .

```
├── index.js
├── src
│ ├── controllers
│ │ ├── AuthController.js
│ │ └── productController.js
│ ├── middlewares
│ │ ├── multer.js
│ │ └── verify-token.js
│ ├── models
│ │ ├── productModel.js
│ │ └── userModel.js
│ └── routes
│ ├── product.js
│ └── auth.js
├── uploads
│ └── images.*
└── package.json
```
## Product SchemProduct Schemaa

```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
```
```
const ProductSchema = new Schema({
category: String,
title: String,
description: String,
photo: String,
price: Number,
stockQuantity: Number,
});
```
```
module.exports = mongoose.model("Product", ProductSchema);
```
## User SchemUser Schemaa

```
const UserSchema = new Schema({
name: String,
email: { type: String, unique: true, required: true },
password: { type: String, required: true },
address: String,
isAdmin: Boolean,
});
```
# Let's startLet's start

### Fork the RepositoryFork the Repository

### You need to fork this repository. A fork creates a copy of a GitHub repository in your own GitHub account. Thus, you have permission to make changes to the content

of your copied repository without ever changing the original one. At the time of your fork, you will copy all of the current contents and the two repositories are now
independent. So if someone commits changes to the original repository, they will not affect your forked copy.

### Fork the original repository https://github.com/odc-student/orange-summer-challenge by clicking the ForkFork button at the upper right corner of the repository page.

This will take you to the GitHub page for your very own GitHub repository! It should have a URL like the one below (where <your GitHub ID> should be your new


GitHub ID):

```
https://github.com/<your GitHub ID>/orange-summer-challenge
```
### Clone the RepositoryClone the Repository

```
git clone https://github.com/<your GitHub ID>/orange-summer-challenge
```
## Push the changes to your remPush the changes to your remote repositoryote repository

Now that you have completed the Markdown exercise, push your changes and new files to your version of the exercise repository.

First you will have to stage all of your changes by adding them, if your current working directory is in the repository, then you simple have to stage all the new files:

```
git add.
```
Now that the files are staged, commit them to your local repository and include a commit message (note that you do not have to use the same commit message
completed the project and you can choose something else that you feel is descriptive and informative, just be sure to keep the ""):

```
git commit -m "completed the project"
```
With the changes committed to your local repository, you can now push them to your remote host on GitHub:

```
git push
```
## Share your folder by pull requestShare your folder by pull request

You need to share your work with us, add them to the course repository that you had initially forked with a pull request.

```
Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is opened, you can discuss and review the potential
changes with collaborators and add follow-up commits before the changes are merged into the repository.
```
Begin by going to https://github.com/odc-student/orange-summer-challenge and clicking on the Pull requestsPull requests button near the top then New pull requestNew pull request.

This will bring you to a page that will allow you to compare across changes. Since you wish to submit changes on a different fork, then click on the hyperlinked phrase
comcompare across forkspare across forks.

Then change the head fork to your own copy of the repository. Note that as of Feb. 2021, the primary branch of this repository is called main and not master. So
your pull request will be slightly different than what's shown in the screenshots below.

### Once you have done this, you have opened a pull request. GitHub then makes it possible for you to review the differences between the two repositories. You can then

write a message about this merge. It is always important for these messages to be thorough and thoughtful.

When you complete the message click the green Create pull requestCreate pull request button.

Your changes to the repository will not be incorporated into the original repository until one of the repository administrators reviews and accepts the edits.


