
<div class="form-group"<% if(hasValidations) {%> ng-class="{'has-error': <%= name %>.sent && !<%= name %>.<%= name %><%= id %>.$dirty && (<%= name %>.<%= name %><%= id %>.$invalid || <%= custom %>)}"<% } %>><% if(label) { %>
  <label for="<%= name %><%= id %>" class="control-label"><%= label %></label><% } %>
