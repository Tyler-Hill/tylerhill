import React, { useState } from "react";
import BucketList from "./BucketList";

function BucketForm() {
  // create a state variable to hold the user input and a function to change it
  const [userInput, setUserInput] = useState("");
  const [bucketList, setBucketList] = useState([]);
  //method to change state when the user types in the input field
  const handleChange = (event) => {
    const userObject = {
      id: Math.random(Math.floor() * 1000),
      text: event.target.value,
    };
    setUserInput(userObject);
  };
  //method to change bucketList state when the user clicks the submit button by adding userInput to the bucketList array
  const handleSubmit = (event) => {
    event.preventDefault();
    setBucketList([...bucketList, userInput]);
    console.log(bucketList);
  };

  const deleteItem = (id) => {
    // change the state of the bucket list to remove the item with the id that was passed in

    const newBucketList = [...bucketList].filter((item) => item.id !== id);
    setBucketList(newBucketList);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your item!" onChange={handleChange}></input>
        <button>Add Item!</button>
      </form>
      {/* // create a container to hold and render bucket list items */}
      <BucketList data={bucketList} deleteItem={deleteItem} />
    </div>
  );
}

export default BucketForm;
