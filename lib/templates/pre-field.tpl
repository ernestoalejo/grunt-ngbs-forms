
<div class="form-group"<% if(hasValidations) {%> ng-class="{'has-error': <%= name %>.sent && (<%= name %>.<%= name %><%= id %>.$invalid<% if (custom) { %> || (!<%= name %>.<%= name %><%= id %>.$dirty && (<%= custom %>))<% } %>)}"<% } %>><% if(label) { %>
  <label for="<%= name %><%= id %>" class="control-label"><%= label %></label><% } %>
