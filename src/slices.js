import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  count: { initialState: 0 },
  count2: {
    initialState: 0,
    reducer: (state, { type }) => {
      switch (type) {
        case "increment":
          return state + 1;
        default:
          return state;
      }
    },
  },
  count3: {
    initialState: 0,
    isGetInitialStateFromStorage: true,
  },
  count4: {
    initialState: 0,
    reducer: (state, { type }) => {
      switch (type) {
        case "increment":
          return state + 1;
        default:
          return state;
      }
    },
    isGetInitialStateFromStorage: true,
  },
});
