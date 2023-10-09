import FilterLink from "./FilterLink";
import { VisibilityFilters } from '../store/actions'

const Footer = () => {
  return (
    <div>
      Show: 
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    </div>
  )
}

export default Footer;
