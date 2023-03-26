import React from "react";

function BucketList(props) {
  return (
    <ul className="list-group">
      {props.data.map((result) => (
        <li key={result.id}>
          {result.text}
          <button onClick={() => props.deleteItem(result.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default BucketList;
