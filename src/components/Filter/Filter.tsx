import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { setVisibilityFilter } from "store/filterRedux";

const Filter: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<number>(1);
  const dispatch = useDispatch();
  
  const changeVisibility = (selected: number, typeFilter: string) => {
    setSelectedFilter(selected);
    dispatch(setVisibilityFilter(typeFilter));
  }

  return (
    <ButtonGroup size="sm">
      <Button
        color="dark"
        outline
        onClick={() => changeVisibility(1, "showAll")}
        active={selectedFilter === 1}
      >
        All
      </Button>
      <Button
        color="dark"
        outline
        onClick={() => changeVisibility(2, "showDone")}
        active={selectedFilter === 2}
      >
        Done
      </Button>
      <Button
        color="dark"
        outline
        onClick={() => changeVisibility(3, "showUnDone")}
        active={selectedFilter === 3}
      >
        Undone
      </Button>
    </ButtonGroup>
  )
}

export default Filter;