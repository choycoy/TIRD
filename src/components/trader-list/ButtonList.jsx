import { ButtonListContainer, ListButton } from "../../style/StyledComponents";
export default function ButtonList({ setFilters, filters }) {
  const handleFilterChange = (type) => (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: e.target.value,
    }));
  };
  return (
    <ButtonListContainer>
      <li>
        <ListButton value={filters.option} onChange={handleFilterChange("option")}>
          <option value="wholeOption">free/paid</option>
          <option value="free">free</option>
          <option value="paid">paid</option>
        </ListButton>
      </li>
      <li>
        <ListButton value={filters.rating} onChange={handleFilterChange("rating")}>
          <option value="wholeRating">⭐rating</option>
          <option value="4">⭐4.0</option>
          <option value="3">⭐3.0</option>
        </ListButton>
      </li>
      <li>
        <ListButton value={filters.followers} onChange={handleFilterChange("followers")}>
          <option value="wholeFollowers">followers</option>
          <option value="30k">30k</option>
          <option value="60k">60k</option>
          <option value="90k">90k</option>
        </ListButton>
      </li>
    </ButtonListContainer>
  );
}
