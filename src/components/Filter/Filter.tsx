import { FC, useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { typeFilter } from "types/filter";
import { useActions } from "hooks";

const Filter: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<number>(1);

  const { setVisibilityFilter } = useActions();
  
  const changeVisibility = (selected: number, typeFilter: string) => {
    setSelectedFilter(selected);
    setVisibilityFilter(typeFilter);
  }

  return (
    <ButtonGroup size="sm">
      <Button
        color="dark"
        outline
        onClick={() => changeVisibility(1, typeFilter.showAll)}
        active={selectedFilter === 1}
      >
        All
      </Button>
      <Button
        color="dark"
        outline
        onClick={() => changeVisibility(2, typeFilter.showDone)}
        active={selectedFilter === 2}
      >
        Done
      </Button>
      <Button
        color="dark"
        outline
        onClick={() => changeVisibility(3, typeFilter.showUnDone)}
        active={selectedFilter === 3}
      >
        Undone
      </Button>
    </ButtonGroup>
  )
}

export default Filter;