import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Auto Insurance",
    description:
      "Covers damage to a vehicle and liability for any injuries or damages caused by the vehicle.",
    coverageAmount: 25000,
    deductible: 500,
    monthlyPremium: 75.0,
  },
  {
    id: 2,
    name: "Homeowners Insurance",
    description:
      "Protects a home and personal belongings from damage, theft, or liability claims.",
    coverageAmount: 300000,
    deductible: 10000,
    monthlyPremium: 150.0,
  },
  {
    id: 3,
    name: "Life Insurance",
    description:
      "Provides financial support to beneficiaries upon the policyholder's death.",
    coverageAmount: 500000,
    deductible: 500,

    monthlyPremium: 50.0,
  },
  {
    id: 4,
    name: "Travel Insurance",
    description:
      "Covers unforeseen events during travel, such as trip cancellation, medical expenses, and lost luggage.",
    coverageAmount: 10000,
    deductible: 250,
    monthlyPremium: 20.0,
  },
  {
    id: 5,
    name: "Pet Insurance",
    description:
      "Provides financial support to beneficiaries upon the policyholder's death.",
    coverageAmount: 5000,
    deductible: 100,
    monthlyPremium: 25.0,
  },
];

const policyDetailSlice = createSlice({
  name: "policyDetails",
  initialState,
  reducers: {
    updatePolicy(state, action) {
    state[action.payload.id]=action.payload
    },
  },
});

export const { updatePolicy } = policyDetailSlice.actions;
export default policyDetailSlice.reducer;
