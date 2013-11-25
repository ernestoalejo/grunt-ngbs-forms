<select class="form-control" name="<%= name %><%= id %>" id="<%= name %><%= id %>" ng-model="<%= obj %>.<%= id %>"<%= args %>><% for(var key in options) { %>
  <option value="<%= key %>"><%= options[key] %></option><% } %>
</select>
