
<div class="form-group"<% if(hasValidations) {%> ng-class="{'has-error': <%= name %>.sent && <%= name %>.<%= name %><%= id %>.$invalid}"<% } %>><% if(label) { %>
  <label for="<%= name %><%= id %>" class="control-label"><%= label %></label><% } %>
