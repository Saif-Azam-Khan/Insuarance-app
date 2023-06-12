import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "user1",
    password: "user1",
    role: "customer",
    balance: 5000.0,
    policies: [
      {
        id: 2,
        name: "Homeowners Insurance",
        description:
          "Protects a home and personal belongings from damage, theft, or liability claims.",
        coverageAmount: 300000,
        deductible: 1000,
        monthlyPremium: 150.0,
        claimed: false, // <-- add claimed section
      },
      {
        id: 3,
        name: "Life Insurance",
        description:
          "Provides financial support to beneficiaries upon the policyholder's death.",
        coverageAmount: 500000,
        deductible: 500,
        monthlyPremium: 50.0,
        claimed: true, // <-- add claimed section
      },
      {
        id: 4,
        name: "Travel Insurance",
        description:
          "Covers unforeseen events during travel, such as trip cancellation, medical expenses, and lost luggage.",
        coverageAmount: 10000,
        deductible: 250,
        monthlyPremium: 20.0,
        claimed: true, // <-- add claimed section
      },
      {
        id: 5,
        name: "Pet Insurance",
        description:
          "Covers veterinary costs for pets in case of accidents or illnesses.",
        coverageAmount: 5000,
        deductible: 100,
        monthlyPremium: 25.0,
        claimed: true, // <-- add claimed section
      },
    ],
  },
  {
    id: 2,
    name: "user2",
    password: "user2",
    role: "customer",
    balance: 2500.0,
    policies: [
      {
        id: 1,
        name: "Auto Insurance",
        description:
          "Covers damage to a vehicle and liability for any injuries or damages caused by the vehicle.",
        coverageAmount: 25000,
        deductible: 500,
        monthlyPremium: 75.0,
        claimed: false, // <-- add claimed section
      },
      {
        id: 2,
        name: "Homeowners Insurance",
        description:
          "Protects a home and personal belongings from damage, theft, or liability claims.",
        coverageAmount: 300000,
        deductible: 1000,
        monthlyPremium: 150.0,
        claimed: true, // <-- add claimed section
      },
      {
        id: 4,
        name: "Travel Insurance",
        description:
          "Covers unforeseen events during travel, such as trip cancellation, medical expenses, and lost luggage.",
        coverageAmount: 10000,
        deductible: 250,
        monthlyPremium: 20.0,
        claimed: true, // <-- add claimed section
      },
      {
        id: 5,
        name: "Pet Insurance",
        description:
          "Covers veterinary costs for pets in case of accidents or illnesses.",
        coverageAmount: 5000,
        deductible: 100,
        monthlyPremium: 25.0,
        claimed: false, // <-- add claimed section
      },
    ],
  },
  {
    id: 3,
    name: "user3",
    password: "user3",
    role: "customer",
    balance: 10000.0,
    policies: [
      {
        id: 2,
        name: "Homeowners Insurance",
        description:
          "Protects a home and personal belongings from damage, theft, or liability claims.",
        coverageAmount: 300000,
        deductible: 1000,
        monthlyPremium: 150.0,
        claimed: false, // <-- add claimed section
      },
      {
        id: 3,
        name: "Life Insurance",
        description:
          "Provides financial support to beneficiaries upon the policyholder's death.",
        coverageAmount: 500000,
        deductible: 500,
        monthlyPremium: 50.0,
        claimed: true, // <-- add claimed section
      },
      {
        id: 4,
        name: "Travel Insurance",
        description:
          "Covers unforeseen events during travel, such as trip cancellation, medical expenses, and lost luggage.",
        coverageAmount: 10000,
        deductible: 250,
        monthlyPremium: 20.0,
        claimed: false, // <-- add claimed section
      },
    ],
  },
  {
    id: 4,
    name: "u",
    password: "u",
    role: "customer",
    balance: 7500.0,
    policies: [
      {
        id: 1,
        name: "Auto Insurance",
        description:
          "Covers damage to a vehicle and liability for any injuries or damages caused by the vehicle.",
        coverageAmount: 25000,
        deductible: 500,
        monthlyPremium: 75.0,
        claimed: false, // <-- add claimed section
      },
      {
        id: 3,
        name: "Life Insurance",
        description:
          "Provides financial support to beneficiaries upon the policyholder's death.",
        coverageAmount: 500000,
        deductible: 500,
        monthlyPremium: 50.0,
        claimed: true, // <-- add claimed section
      },
    ],
  },
  {
    id: 5,
    name: "admin",
    password: "admin",
    role: "admin",
  },
];

// Create a slice of state named "userDetails"
const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState, // The initial state is defined somewhere else and passed as an argument to this function
  reducers: {
    transferMoney(state, action) {
      const amount = action.payload.amount;
      const id = action.payload.id;
      state[id - 1].balance = state[id - 1].balance - amount;
    },
    claimPolicy(state, action){
      const policyId = action.payload.policyId;
      const userId = action.payload.userId;
      // state[userId].policies[policyId];
    state[userId-1].policies[policyId].claimed=true
    console.log("hi");
    },
    removePolicy(state, action) {
      const policyId = action.payload.policyId;
      const userId = action.payload.userId;
      // state[userId].policies[policyId];
    state[userId-1].policies=state[userId-1].policies.filter((item)=>item.id!==policyId)
    console.log("123");
    }, // A reducer function that removes a policy from the user's policies array
    addPolicy(state, action) {
      // A reducer function that adds a policy to the user's policies array

      // Extract the userID and policyToAdd from the action payload
      const id = action.payload.userID;
      const newPolicy = action.payload.policyToAdd;

      // Get the deductible amount from the new policy and available balance from the state
      const deductableAmount = newPolicy.deductible;
      const availableAmount = state[id - 1].balance;

      // Check if the deductible is less than or equal to the available balance
      if (deductableAmount <= availableAmount) {
        // Add the new policy to the user's policies array if deductible is covered
        state[id - 1].policies.push(newPolicy);
        // Deduct the deductible amount from the user's balance
        state[id - 1].balance = state[id - 1].balance - deductableAmount;
      } else {
        // Display an alert message if there are insufficient funds
        alert(
          `You do not have enough balance, Your balance is ${availableAmount} $`
        );
      }
    },
  },
});

// Extract the action creators from the userDetailsSlice object
export const { removePolicy, addPolicy, claimPolicy, transferMoney } =
  userDetailsSlice.actions;

// Export the reducer function generated by createSlice
export default userDetailsSlice.reducer;
