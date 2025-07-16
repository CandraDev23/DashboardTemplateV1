export function reportsPage() {
  return `
          <div class="content">

          <div class="content-header reports"> 
            <h1 class="title-header">Reports</h1>
            <div id="export-buttons" class="export-buttons"></div>
          </div>
          <div class="content-body">
          <table id="report-table" class="table-data report-table">
  <thead>
    <tr>
      <th>No</th>
      <th>Product</th>
      <th>Category</th>
      <th>Country</th>
      <th>Date</th>
      <th>Units Sold</th>
      <th>Revenue</th>
      <th>Returns</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
          </div>
          </div>
          `;
}