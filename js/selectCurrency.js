export const selectCurrency = (e) => {
  const value = e.value;
  switch (value) {
    case "dollar":
      localStorage.setItem("cur", "dollar");
      location.reload();
      break;
    case "evro":
      localStorage.setItem("cur", "evro");
      location.reload();
      break;
    case "hryvna":
      localStorage.setItem("cur", "hryvna");
      location.reload();
    default:
      break;
  }
};
