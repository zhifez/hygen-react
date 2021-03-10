---
inject: true
to: src/App.js
before: </Switch>
skip_if: <Route exact path="<%= route %>" component={<%= Name || 'NewPage' %>} />
---
      <Route exact path="<%= route %>" component={<%= Name || 'NewPage' %>} />