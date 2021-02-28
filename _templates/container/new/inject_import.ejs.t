---
inject: true
to: src/App.js
after: import { Route, Switch } from 'react-router-dom';
skip_if: import <%= Name || 'NewPage' %> from './containers/<%= Name || 'NewPage' %>';
---
import <%= Name || 'NewPage' %> from './containers/<%= Name || 'NewPage' %>';