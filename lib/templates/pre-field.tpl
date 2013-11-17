
<div class="form-group"<% if(hasValidations) {%> ng-class="{'has-error': <%= name %>.sent && <%= name %><%= id %>.$invalid && !<%= name %><%= id %>.$dirty}"<% } %>><% if(label) { %>
  <label for="<%= name %><%= id %>" class="control-label"><%= label %></label><% } %>
