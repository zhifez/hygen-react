---
inject: true
to: src/components/Header.js
before: </Nav>
skip_if: <Nav.Link href="<%= route %>"><%= Name || 'NewPage' %></Nav.Link>
---
            <Nav.Link href="<%= route %>"><%= Name || 'NewPage' %></Nav.Link>