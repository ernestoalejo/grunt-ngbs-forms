<select class="form-control" name="<%= name %><%= id %>" id="<%= name %><%= id %>" ng-model="<%= obj %>.<%= id %>"<%= attrs %>><% for(var key in options) { %>
  <option value="<%= key %>"><%= options[key] %></option><% } %><% if (ngRepeatOptions) { %>
  <option ng-repeat="<%= ngRepeatOptions.repeat %>" value="<%= ngRepeatOptions.value %>"><%= ngRepeatOptions.label %></option><% } %>
</select>
