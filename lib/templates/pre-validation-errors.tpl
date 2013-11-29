<span class="help-block" ng-show="<%= name %>.sent && (<%= name %>.<%= name %><%= id %>.$invalid<% if (custom) { %> || (!<%= name %>.<%= name %><%= id %>.$dirty && (<%= custom %>))<% } %>)">
