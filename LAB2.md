Add Testing and Router
===

## Steps

* Make sure your search functionality is in its own component.
* Create a `Header` Component, that uses `Link` components for navigation
* Add setup and JSX for React Router to App. Basic structure is:
    ```
    Router
        App
            Header
            Routes
                Switch
                    Route...
                    Route...
                    Redirect
    ```
* `Routes` should contain:
    - home
    - search
    - detail view
    - anything else you want to add
    
## Testing

1. Install and configure jest and enzyme
1. Try the Design-first TDD approach on your Detail component
