import React from 'react'

export default (contact) => {
  return(
    <div>
      <h3 id="module1tasks">Module #1 Tasks</h3>
      <h4 id="basic">Basic</h4>
      <ul>
        <li><span role="img" aria-label="checkmark">✅</span> Install node and create-react-app</li>
        <li><span role="img" aria-label="checkmark">✅</span> Create a new application</li>
        <li><span role="img" aria-label="checkmark">✅</span> Remove auto-generated code from the src directory
        <pre><code>Don't remove code from `src/index.js`, it's fine.
        </code></pre></li>
        <li><span role="img" aria-label="checkmark">✅</span> Create a simple component that displays a user contact
        <pre><code>A contact should have name, phone number, e-mail address and address. Consider using randomuser.me for user data
        </code></pre></li>
      </ul>
      <hr />

      <h3 id="module2tasks">Module #2 Tasks</h3>
      <h4 id="basic-1">Basic</h4>
      <ul>
        <li><span role="img" aria-label="checkmark">✅</span> Create a single contact component</li>
        <li><span role="img" aria-label="checkmark">✅</span> Create a component for list of contacts</li>
        </ul>
        <h4 id="advanced">Advanced</h4>
        <ul>
        <li><span role="img" aria-label="checkmark">✅</span> Add tags to the contact component</li>
        <li><span role="img" aria-label="checkmark">✅</span> Mark some contacts as favorites and show them on separate list</li>
      </ul>
      <hr />
      
      <h3 id="module3tasks">Module #3 Tasks</h3>
      <h4 id="basic-2">Basic</h4>
      <ul>
        <li><span role="img" aria-label="checkmark">✅</span>  Add searching the contacts by name</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Change search to include all fields</li>
        </ul>
        <h4 id="advanced-1">Advanced</h4>
        <ul>
        <li><span role="img" aria-label="checkmark">✅</span>  Add button to sort the contacts alphabetically. Clicking it should toggle sorting direction.</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Add an icon the the button (↑/↓) to indicate sorting direction.</li>
      </ul>

      <h3 id="module4tasks">Module #4 Tasks</h3>
      <h4 id="basic-3">Basic</h4>
      <ul>
        <li><span role="img" aria-label="checkmark">✅</span>  Setup the Router with two pages: home page with title and message and contact list page (the current view)</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Create navigation component with links that displays on both pages</li>
        </ul>
        <h4 id="advanced-2">Advanced</h4>
        <ul>
        <li><span role="img" aria-label="checkmark">✅</span>  The active link should be visually distinct</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Add a route for single contact page</li>
      </ul>
      <hr />

      <h3 id="module5tasks">Module #5 Tasks</h3>
      <h4 id="basic-4">Basic</h4>
      <ul>
        <li><span role="img" aria-label="checkmark">✅</span>  Setup Redux: create store, wrap the application in Provider, and connect main component</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Move all contacts data to the store</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Add the ability to mark a contact as favourite</li>
        </ul>
        <h4 id="advanced-3">Advanced</h4>
        <ul>
        <li><span role="img" aria-label="checkmark">✅</span>  Mark some contacts as favourites and show them on separate list</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Add the ability to remove contacts</li>
        <li><span role="img" aria-label="checkmark">✅</span>  Add the ability to add new contacts</li>
      </ul>

      <hr />
    </div>
  )
}