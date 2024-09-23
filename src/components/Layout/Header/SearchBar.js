// SearchBar.js
import React, { useCallback } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../styles";

/**
 * SearchBar component provides an input field for searching players.
 * It allows users to type a search query and triggers a search function on a key press.
 *
 * @param {Object} props - The component props.
 * @param {string} props.search - The current search query.
 * @param {function} props.setSearch - Function to update the search query state.
 * @param {function} props.handleKeyPress - Function to handle key press events for search submission.
 * @returns {JSX.Element} The rendered SearchBar component.
 */
const SearchBar = ({ search, setSearch, handleKeyPress }) => {
  const classes = useStyles();

  const handleSearchChange = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={search}
        onKeyDown={handleKeyPress}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
