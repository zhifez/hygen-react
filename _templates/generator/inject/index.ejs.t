---
to: _templates/<%= name %>/<%= action || 'new' %>/index.ejs.t
---
---
inject: true
to: src/index.js
before: <div>
skip_if: <%= Name || 'NewPage' %>
---
<div><%= Name || 'NewPage' %></div>