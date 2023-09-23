import React, { useMemo } from "react";

const searchItems = () => {};

function MemoForHooks({ allItems, text}) {

  const searchOptions = useMemo(() => {
    return { match: 'word', text };
  }, [text])

  const visibleItems = useMemo(() => {
    return searchItems(allItems, searchOptions);
  }, [allItems, searchOptions])



  return (
      <>

      </>
  );
}


export default MemoForHooks;


