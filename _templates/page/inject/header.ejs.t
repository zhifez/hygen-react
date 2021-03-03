---
inject: true
to: src/components/Header.js
before: </Nav>
skip_if: <Nav.Link href="/<%= Name || 'NewPage' %>"><%= name || 'newPage' %></Nav.Link>
---
            <Nav.Link href="/<%= Name || 'NewPage' %>"><%= name || 'newPage' %></Nav.Link>