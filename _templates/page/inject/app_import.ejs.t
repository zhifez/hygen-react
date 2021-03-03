---
inject: true
to: src/App.js
after: import Home from './pages/Home';
skip_if: import <%= Name || 'NewPage' %> from './pages/<%= Name || 'NewPage' %>';
---
import <%= Name || 'NewPage' %> from './pages/<%= Name || 'NewPage' %>';