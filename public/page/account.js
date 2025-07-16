export function accountPage() {
  return `
          <div class="content">

          <div class="content-header account"> 
            <h1 class="title-header">Account</h1>
          </div>
          <div class="content-body">
          <form action="#" method="POST" class="account-form">
      
      <!-- Personal Info -->
      <div class="personal-info">
        <h3>Seller Account Information</h3>
        <div class="form-group">
          <label for="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            placeholder="Enter full name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. 081234567890"
            required
          />
        </div>
         <button type="submit" class="btn-save">Save changes</button>

      </div>
      </form>

          <form action="#" method="POST" class="account-form">
      
      <!-- Store Info -->
      <div class="store-info">
        <h3>Store Information</h3>
  
        <div class="form-group">
          <label for="storeName">Store Name</label>
          <input
            type="text"
            id="storeName"
            name="storeName"
            placeholder="Enter your store name"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="category">Store Category</label>
          <select id="category" name="category">
            <option value="">-- Select category --</option>
            <option value="food">Food & Beverage</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="others">Others</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="storeAddress">Store Address</label>
          <textarea
            id="storeAddress"
            name="storeAddress"
            rows="3"
            placeholder="Enter complete store address"
          ></textarea>
        </div>
  
        <div class="form-group">
          <label for="description">Store Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            placeholder="Describe your store..."
          ></textarea>
        </div>

        </form>
  

        <div class="form-group">
          <label for="logo">Store Logo</label>
          <input type="file" id="logo" name="logo" />
        </div>
         <button type="submit" class="btn-save">Save changes</button>

      </div>
      </form>

          <form action="#" method="POST" class="account-form">
      <!-- Payment Info -->
       <div class="payment-info">
         <h3>Payment Information</h3>
         <div class="form-group">
           <label for="bankName">Bank Name</label>
           <input
             type="text"
             id="bankName"
             name="bankName"
             placeholder="e.g. BCA, BRI, Mandiri"
           />
         </div>
   
         <div class="form-group">
           <label for="bankAccount">Bank Account Number</label>
           <input
             type="text"
             id="bankAccount"
             name="bankAccount"
             placeholder="Enter active account number"
           />
         </div>
   
         <div class="form-group">
           <label for="accountHolder">Account Holder Name</label>
           <input
             type="text"
             id="accountHolder"
             name="accountHolder"
             placeholder="Name on the bank book"
           />
         </div>
         <button type="submit" class="btn-save">Save changes</button>
       </div>
       </form>

          <form action="#" method="POST" class="account-form">
      <!-- Security -->
       <div class="security">
         <h3>Account Security</h3>
   
         <div class="form-group">
           <label for="newPassword">New Password</label>
           <input
             type="password"
             id="newPassword"
             name="newPassword"
             placeholder="At least 8 characters"
           />
         </div>
   
         <div class="form-group">
           <label for="confirmPassword">Confirm Password</label>
           <input
             type="password"
             id="confirmPassword"
             name="confirmPassword"
             placeholder="Repeat new password"
           />
         </div>
         <button type="submit" class="btn-save">Save changes</button>
       </div>
    </form>
          </div>
          </div>
          `;
}
