# Server Side Docs

## Overview

This document provides information about the backend structure of our web application. It's built using NodeJS with TypeScript, MongoDB, Mongoose, and Express.js.

## File Structure

This code-base follows the MVC structure. Where the nested module folder defines the controller, routes and services of the server side application. 

the `/src`  folder is the root folder of the code base. 

 

## Deployment

This server is hosted on Vercel a  free hosting provider for modern web application. 

**Deployment Link:**   [`https://donation-server-six.vercel.app](https://donation-server-six.vercel.app/)/api/v1/`

## API endpoints and Schema

### User   Endpoints

1. Create User: `/user/create` (POST)
2. Login : `/user/login` (POST)
3. Get User : `/user/:id` (GET)
4. Create Admin: `/user/create-admin` (PATCH)

### User Schema

```tsx
    name: string,
    email: string,
    password: string,
    role: string
```

### Campaign Endpoints

1. Create Campaign : `/campaign/create` (POST)
2. Get All Campaign: `/campaign/all-campaign?limit=10` (GET) 
3. Get Single Campaign: `/campaign/:id` (GET)
4. Update Campaign: `/campaign/update/:id` (PATCH)

### Campaign Schema

```tsx
		title: sring,
		description: string,
    amount: number,
    image: string,
    creatorId: string
    category: string
```

### Donation Endpoints

1. Create Donation: `/donation/create` (POST)
2. Get All Donation: `/donation/all-donation` (GET)
3. Get Donation by Campaign: `/donation/donations-by-campaign` (GET)
4. Get Donation by User :  `/donation/donations-by-user` (GET)

### Donation Schema
