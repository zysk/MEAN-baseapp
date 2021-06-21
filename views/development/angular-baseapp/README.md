# README #

This README would document steps which are necessary to get your application up and running.

## What is this repository for ? ##

* ### Quick summary ###

    Idea is to directly get started with implementing business logics as per project requirement without spending time on setting up project from scratch.

* ### Version ###

    Angular 12.0.5 (Stable)<br>

## Configuration and Instructions ##

  1. `Change Application name:` Copy current application name from `package.json` file, `ctrl+shift+f` or `command+shift+f`, paste and search the name. Replace all the matching search results with your desired application name. Then change project directory name with the given application name.
  2. In `data-share.service.ts` file set boolean value of `sidebarActive` to show/hide Sidebar. Define sidebar content in `assets/dummy-json/navigation-links.json` file.
  3. Use `logout()` function of `data-share.service.ts`.
  4. Store logged in user's details in `loggedInUserDetails` variable of `data-share.service.ts` to make it available at root level.
  5. To share data accross components as per requirement, declare your own `Subjects` , `Observables`, `variables`, `functions` etc in `data-share.service.ts` file. Camel case should be followed.
  6. To add new error message based on http error code, edit `http-error-handler.service.ts` file.
  7. Use `login` component of `user` module for login page.
  8. Use `RouteGuard` from `route.guard.ts` while defining routes to restrict unauthorized user.
  9. Inside module directory, create seperate directory for components and routes. Ex: Check `user` module.
  10. Files, variables in constructors which starts with `_` indicated its locally used.

## Contribution guidelines ##

* Code review
* Other guidelines

## Who do I talk to? ##

* Repo owner, creator or admin
* Team
