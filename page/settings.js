export function settingsPage() {
  return `
          <div class="content">
          <div class="content-header settings"> 
            <h1 class="title-header">Settings</h1>
          </div>
          <div class="content-body">
            <div class="notification">
              <span>
                <h3>Notification</h3>
                <p>Receive notifications for new orders, sales, and other important updates.</p>
              </span>
              <label class="switch">
                <input type="checkbox" id="storeStatus">
                <span class="slider round"></span>
              </label>
            </div>
            <div class="theme">
              <span>
                <h3>Theme</h3>
                <p>Switch between light and dark mode for a personalized experience.</p>
                </span>
              <label class="switch">
                <input type="checkbox" id="themeToggle">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          </div>
          `;
}