const SortSearchHook = () => {
  const options = [
    { value: "", label: "sort by" },
    { value: "+price", label: "upper price" },
    { value: "-price", label: "lower price" },
  ];

  let defaultOption = options[0];

  const onChangeSorting = (e) => {
    if (e.label === "sort by") {
      localStorage.setItem("sort", "");
    } else if (e.label === "upper price") {
      localStorage.setItem("sort", "+price");
    } else if (e.label === "lower price") {
      localStorage.setItem("sort", "-price");
    }
  };

  return { options, defaultOption, onChangeSorting };
};

export default SortSearchHook;
