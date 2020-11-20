const { atom, selector } = require("recoil");

const globalExpansionState = atom({
  key: "globalExpansionState",
  default: false,
});

const nameState = atom({
  key: "nameState",
  default: "",
});

const charState = selector({
  key: "charState",
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});

export { globalExpansionState, nameState, charState };
