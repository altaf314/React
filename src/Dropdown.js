import React from "react";

function Drop()
{
    return(
        <form action="#">
  <label htmlFor="lang">Select Language:</label>
  <select name="lang" id="lang">
    <option value="english">English</option>
    <option value="hindi">Hindi</option>
    <option value="kannada">Kannada</option>
    <option value="telgue">Telgue</option>
  </select>
  <br></br>
  <input type="submit" value="Submit"/>
</form>

    );
}

export default Drop;