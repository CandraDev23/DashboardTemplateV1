export function ordersPage() {
  return `
          <div class="content">
            <div class="content-header orders">
            <h1 class="title-header">Orders</h1>
            <button class="btn-add-order">Add order<i class="far fa-plus-square"></i></button>
          </div>
            <div class="content-body">
<table id="orders-table" class="table-data">
  <thead>
    <tr>
      <th>No</th>
      <th>Order ID</th>
      <th>Customer Name</th>
      <th>Order Date</th>
      <th>Total</th>
      <th class="status">Status</th>
      <th class="actions">Actions</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
            </div>

          </div>
          `;
}