# YT Player Remote Setup Guide

## Requirements  
- **Node.js**  
- **Browser**  

---

### Step 1: Clone and Setup the Project  
1. Clone the project repository or download the ZIP file:  
   ```bash
   git clone https://github.com/Gaurav153fr/yt_remote
   ```
2. Navigate to the project directory and install the required modules:  
   ```bash
   npm install
   ```
3. Start the server:  
   ```bash
   node server.js
   ```

---

### Step 2: Add Extension to Browser  

1. Open your browser and go to **Extensions** (e.g., `chrome://extensions/` for Chrome).  
2. Enable **Developer Mode**.  
3. Click **Load Unpacked** and select the `extension` folder from the cloned project.  
   - This will add the **YT Player Remote** extension to your browser.  

4. Edit the server address in `background.js`:  
   - Open the `background.js` file inside the `extension` folder.  
   - Replace the value of `SERVER_ADDRESS` with the server address displayed when you started the server (e.g., `192.xx.xx.x.x`).  

---

### Step 3: Verify Setup  

1. Open **YouTube Music** in your browser.  
2. Return to the browser extensions page and click **Reload** next to the **YT Player Remote** extension.  
3. Check your terminal:  
   - If the server is receiving data, your setup is correct.  

---

### Step 4: Access the Site  

1. Open the site hosted by the running server from any device (e.g., `http://192.xx.xx.x.x`).  
2. If you face connection issues:  
   - Ensure your firewall is configured to allow connections to the server.

