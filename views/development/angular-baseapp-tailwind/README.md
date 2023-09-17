# README #

This README would document steps which are necessary to get your application up and running.

## What is this repository for ? ##

* ### Quick summary ###

    Starter app

* ### Version ###

    Angular 16.*<br>

## Configuration and Instructions ##

  1. In `data-share.service.ts` file set boolean value of `sidebarActive` to show/hide Sidebar. Define sidebar content in `assets/dummy-json/navigation-links.json` file.
  2. Use `logout()` function of `data-share.service.ts`.
  3. Store logged in user's details in `loggedInUserDetails` variable of `data-share.service.ts` to make it available at root level.
  4. To share data across components as per requirement, declare your own `Subjects` , `Observables`, `variables`, `functions` etc in `data-share.service.ts` file. Camel case should be followed.
  5. To add new error message based on http error code, edit `http-error-handler.service.ts` file.
  6. Use `RouteGuard` from `route.guard.ts` while defining routes to restrict unauthorized user.
  7. Inside module directory, create separate directory for components and routes. Ex: Check `user` module.

## Contribution guidelines ##

* Code review
* Other guidelines

## Who do I talk to? ##

* Repo owner, creator or admin
* Team
