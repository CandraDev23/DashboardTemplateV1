export function customersPage() {
  return `
          <div class="content">
            <div class="content-header customers">
            <h1 class="title-header">Customers</h1>
            <button class="btn-add-customer">Add Customer<i class="fas fa-user-plus"></i></button>
          </div>
            <div class="content-body">
            <div class="customers-grid">
  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1622191466186-683afebc9942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNvbWVvbmUlMjBwb3NlfGVufDB8fDB8fHww" alt="Photo Profile">
    <h3>JayD</h3>
    <p>Jerry Dalton</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>

  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1629552207118-5be14a318e48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHxzb21lb25lJTIwcG9zZXxlbnwwfHwwfHx8MA%3D%3D" alt="Photo Profile">
    <h3>LalaBee</h3>
    <p>Larissa Beatrice</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>

  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1713746965384-b78eef4a1781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvbWVvbmUlMjBwb3NlfGVufDB8fDB8fHww" alt="Photo Profile">
    <h3>Dex</h3>
    <p>Dexter Julian</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>

  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxzb21lb25lJTIwcG9zZXxlbnwwfHwwfHx8MA%3D%3D" alt="Photo Profile">
    <h3>MeiMei</h3>
    <p>Meilani Putri</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>

  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1646633632616-b225ffb6ceb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNvbWVvbmUlMjBwb3NlfGVufDB8fDB8fHww" alt="Photo Profile">
    <h3>Riz</h3>
    <p>Rizky Andrian</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>

  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1636228886328-361b1472358f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHNvbWVvbmUlMjBwb3NlfGVufDB8fDB8fHww" alt="Photo Profile">
    <h3>Yaya</h3>
    <p>Ayu Yuliana</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>

  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1690210241418-6d1f444ff0f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvbWVvbmUlMjBwb3NlfGVufDB8fDB8fHww" alt="Photo Profile">
    <h3>Ken</h3>
    <p>Kennedy Hartono</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>

  <div class="card customer">
    <img src="https://images.unsplash.com/photo-1644126999196-bd94f784aad7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcyfHxzb21lb25lJTIwcG9zZXxlbnwwfHwwfHx8MA%3D%3D" alt="Photo Profile">
    <h3>Sya</h3>
    <p>Syarifah Zahra</p>
    <div class="actions">
      <button class="btn-show"><i class="fas fa-eye"></i></button>
      <button class="btn-edit"><i class="fas fa-edit"></i></button>
      <button class="btn-delete"><i class="fas fa-trash"></i></button>
    </div>
  </div>
</div>

            </div>
          </div>
  `;
}