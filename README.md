In this React.js app I have used React-Router-Dom for routing and have Redux for predictable state management.
We can Login as two different roles customer or admin. Both the roles have different functionality and use cases,

For Customer we have different views such as : All Policies, My Policies, Money Transfer

All Policies:
This code is a React component that displays a list of all available insurance policies in the application and allows the current user to add a policy to their account. It uses React Redux to access the state of the application and dispatch actions to modify it.
The component imports the useSelector and useDispatch hooks from React Redux, as well as the addPolicy action creator from the userSlice slice of the Redux store. It also imports the Card and Button components from React Bootstrap.
The component takes the currentUser object as a prop, which is used to filter the allDetails array to find the current user's information and policies.
The handleClick function is called when the user clicks on the "Add Policy" button for a particular policy. It creates an actionPayload object with the policyToAdd property set to the selected policy, and the userID property set to the current user's ID. It then dispatches the addPolicy action with this payload.
If the selected policy is already linked to the user's account, an alert is displayed indicating that the policy cannot be added again.
The component renders a list of Card components, each displaying information about one policy, including its name, description, coverage amount, and deductible. Each Card also has an "Add Policy" button with an onClick event listener that calls the handleClick function.
Finally, the component exports itself for use in other parts of the application.

My Policies:
This is a React component that displays the policies associated with the currently logged-in user. It uses Redux to manage the state of the application. The component fetches all details from the state using the useSelector hook and finds the current user's details using the current user's ID. It then maps over the user's policies to display them in cards. Each policy card has a "Remove Policy" button that dispatches an action to remove the policy from the user's account, and a "Claim Policy" button that dispatches an action to claim the policy if it hasn't already been claimed. The component also makes use of Bootstrap components for styling.

Money Transfer:
This code defines a React component called "MoneyTransfer". It imports the "useState", "useSelector", and "useDispatch" hooks from the "react-redux" library, as well as the "Button", "Card", and "Form" components from the "react-bootstrap" library. It also imports an action creator called "transferMoney" from a Redux Toolkit userSlice slice.
The component renders a form that allows a user to transfer money to another account. It uses state hooks to store information such as whether the form is validated, the current user's details, the transfer amount, and whether the form is active. When the user clicks the "Transfer Money" button, it dispatches an action to transfer the specified amount of money from the current user's account, if there are sufficient funds available.
The form includes input fields for the recipient's account number, the transfer amount, the beneficiary's name, and the current user's password. Each field is styled with Bootstrap classes. The "handleClick" function handles the form submission and validates the input. If the transfer amount is greater than the current user's balance, an error message is displayed. Otherwise, a success message is displayed and the transfer amount is reset to 0.

For Admin we have different views such as : All Policies, My Users, Manage users, Manage policies

All Policies:
This is a React component that displays a list of policies. It uses the
useSelector hook from React-Redux to select the allPolicies array from the Redux store state.
The allPolicies array is then mapped over to create a Card component for each policy object in the array. The properties of the policy such as name ,description ,coverageAmount,and monthlyPremium are displayed within the Card.
Finally, the component is exported for use in other parts of the application.

My Users:
This code exports a functional component AllUsers that uses the useSelector hook from the react-redux library to retrieve the allDetails state from the store and then filters out only the users who have the role of "customer". The filtered users are then mapped over to display their name, balance, and policies owned.
The component uses the Card component from the react-bootstrap library to create cards for each user with their details displayed within. The user's policies are mapped over within the card body to display their names as well.
Finally, the AllUsers component is exported to be used in other parts of the application.

Manage users:
This code is a React component that displays user details and allows an admin user to manage policies claimed by selected customers. It uses React Bootstrap for styling.
When the component is rendered, it first retrieves all users from the Redux store whose roles are "customer" and filters out non-customers. It then displays buttons for each customer user, which can be clicked to display that user's name and policy details in a table.
If any policies have been claimed by the selected user, they will also be displayed in a list with corresponding approve or reject buttons. When either button is clicked, an alert message is displayed indicating whether the claim has been approved or rejected.
The selected user's index is stored in state using the useState hook. The handleClick function sets the index of the selected user when one of the user buttons is clicked. Conditional rendering is used to check if policies exist for the user and whether they have been claimed or not.

Manage policies:
The given code defines a React functional component called ManagePolicies. Within the component, it declares several state variables using the useStatehook, including editPolicy, names, coverageAmount, deductible, monthlyPremium, and description.
The component also makes use of the useSelector and useDispatch hooks from the React-Redux library. Specifically, it accesses the allPolicies state variable from the Redux store using useSelector, and it creates a dispatch function in order to dispatch an action to update the policy.
The handleClick function is used to set the value of editPolicy based on the ID of the clicked element. The handleSubmit function is triggered when the form is submitted, and it constructs a payload object with values taken from the state variables. It then uses the dispatch function to update the policy with the new payload.