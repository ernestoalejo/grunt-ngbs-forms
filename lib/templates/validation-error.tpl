  <% if (error) { %><span ng-show="<%= name %>.<%= name %><%= id %>.$error.<%= error %>"><%= msg %></span><% } %><% if (customError) { %><span ng-show="<%= customError %>"><%= msg %></span><% } %>
