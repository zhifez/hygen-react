---
inject: true
to: src/App.js
before: </Switch>
skip_if: <Route exact path="/<%= name || 'newPage' %>" component={<%= Name || 'NewPage' %>} />
---
      <Route exact path="/<%= name || 'newPage' %>" component={<%= Name || 'NewPage' %>} />