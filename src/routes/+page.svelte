<script >
// @ts-nocheck

import DynamicForm from "./DynamicForm.svelte";
import FetchData from "./FetchData.svelte";
import Drawer from './drawer.svelte';
import { tick } from 'svelte';
let isHamburgerVisible = true;

let isDrawerOpen = false;

async function toggleDrawer() {
    console.log("Before toggle:", isDrawerOpen, "Hamburger Visible:", isHamburgerVisible);
    
    if (!isDrawerOpen) {
        isDrawerOpen = true;
        isHamburgerVisible = false; // ✅ Hide immediately when opening
    } else {
        isDrawerOpen = false;
        await tick(); // ✅ Wait for Svelte to process state change
        
        setTimeout(() => {
            isHamburgerVisible = true; // ✅ Ensure hamburger appears after drawer closes
            console.log("Hamburger should be visible now:", isHamburgerVisible);
        }, 300); // Same as CSS transition time (0.3s)
    }

    console.log("After toggle:", isDrawerOpen, "Hamburger Visible:", isHamburgerVisible);
}

function closeDrawer() {
  isDrawerOpen = false; // ✅ Ensure state resets on close
  setTimeout(() => {
    isHamburgerVisible = true; 
    console.log('i am called')
}, 300); 
  console.log("After toggle:", isDrawerOpen, "Hamburger Visible:", isHamburgerVisible);
}
</script>
<link href='https://fonts.googleapis.com/css?family=Saira' rel='stylesheet'>

<header class="header">
    <div class="logo">
    <img src="logo.png" alt="Budget Planner Logo" /> <!-- Replace URL in src -->
      <span class="title"><b>Budget</b> Planner</span>
    </div>
    <nav class="menu">
      <button class="menu-icon" on:click={toggleDrawer} style="display: {isHamburgerVisible ? 'block' : 'none' };"><img src="hamburger.png" alt="Hamburger Menu" /> </button>
    </nav>
  </header>
  <main>
    <slot />
    <Drawer isOpen={isDrawerOpen} on:close={closeDrawer} />
  </main>
  <footer class="footer">
    <nav class="footer-links">
      <a href="#">Contact Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </nav>
  </footer>
  
  <style>
  /* Header styles */
  :global(body) {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full height */
  margin: 0;
  font-family: 'Saira';font-size: 1rem;
}
main {
  flex: 1;
}
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f8f8;
    padding: 15px 20px;
    border-bottom: 2px solid #ddd;
    
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 51px;
  }
  
  .logo img {
    width: 71px; /* Adjust as needed */
    height: 52px;
  }
  
  .title {
    font-size: 1.75rem;
    font-family: 'Saira';font-size: 2rem;


  }
  
  .menu-icon {
    position: fixed;
    top: 15px;
    right: 15px;
    font-size: 40px;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 1100
  }
  
  /* Footer styles */
  footer {
  display: flex;
  justify-content: center;
  padding: 15px;
  background: #f8f8f8;
  border-top: 2px solid #ddd;
  border-radius: 36px 36px 0 0;
}
  .footer-links a {
    margin: 0 10px;
    text-decoration: none;
    color: #555;
    font-size: 0.9rem;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  </style>
