<% if (prefix || suffix) { %><div class="input-group">
  <% if (prefix) { %><span class="input-group-addon"><%= prefix %></span>
  <% } %><% } %><input type="<%= type %>" class="form-control" placeholder="<%= placeholder %>" name="<%= name %><%= id %>" id="<%= name %><%= id %>" ng-model="<%= obj %>.<%= id %>"<%= attrs %>><% if (suffix) { %>
  <span class="input-group-addon"><%= suffix %></span><% } %><% if (prefix || suffix) { %>
</div><% } %>
