---
inject: true
to: src/App.js
before: </Switch>
skip_if: <Route exact path="/<%= route || name || 'newPage' %>" component={<%= Name || 'NewPage' %>} />
---
      <Route exact path="/<%= route || name || 'newPage' %>" component={<%= Name || 'NewPage' %>} />