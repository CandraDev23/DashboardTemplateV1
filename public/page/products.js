export function productsPage() {
  return `
          <div class="content">
            <div class="content-header products">
            <h1 class="title-header">Products</h1>
            <button class="btn-add-product">Add product<i class="fas fa-plus"></i></button>
            </div>
            <div class="content-body">
                <table id="products-table" class="table-data">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Product name</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th class="actions">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Data akan diisi lewat JavaScript -->
                  </tbody>
                </table>
            </div>
        </div>
  `
}