# AssetAlchemy

# Anthony Lam (alam31@uic.edu) & Alexander Moran (amoran9@uic.edu)

# [Your GitHub repository link goes here](https://github.com/moraan/asset_alchemy)
If you have a private repository, please add `kaytwo` and `sauravjoshi` as collaborators.

## What does your application do?
AssetAlchemy is a IT asset managment tool. We allow organizations to create, read, update, and delete all of their IT assets. Additionally, AssetAlchemy will generate barcodes for every asset that is added, allowing organizations to track inventory. Futhermore, AssetAlchemy gives organizations an advance search option for faster look-up of assets.

## What makes it different than a CRUD app? I.e., what functionality does it provide that is not just a user interface layer on top of a database of user information,and the ability to view / add to / change that information?
The ability to generate and print a barcode for an oraganizations IT asset, alongside an advanced search option is what makes AssetAlchemy different than a CRUD app. 

## What security and privacy concerns do you expect you (as developers) or your users to have with this application?
Some security concerns that we may be expecting are SQL injections, cross-site scripting, cross-site request forgery, weak or inadequate authetication and authorization, and failed data encryption. We may also be expecting to encounter ransomware and data theft risks. To address some of these security concerns, we will be using libraries like helmet.js and express validator to use https, defend against XSS and SQL injections.


### This repository

This repository has a package.json that functions as a blank shell that gets full credit if you turn it in to the gradescope autograder. We will not be using the autograder in any way to actually evaluate your project, it is just there to keep track of your initial submission.

We recommend that you use this repository for your final project code. This will allow you to ask questions on Piazza and get help from the TAs and instructors. Adding a real linter, type checker, etc, based on our other examples would be a good idea.
