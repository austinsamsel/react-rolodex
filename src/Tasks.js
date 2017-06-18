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
    </div>
  )
}