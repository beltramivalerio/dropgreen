export const hostscripts =
  import.meta.env.MODE === "development"
    ? "http://localhost:4801"
    : //"https://iapscript.skeinhub.com"
      "https://iapscript.skeinhub.com";
