import React from "react";
import Card from "./Card";
const CardList = (props) => {
    const {robots}=props;
    return(
    <div>{
    robots.map((user, i) => {
        return (
            <Card 
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            Gmail={robots[i].email} />
        );
    })
    }
    </div>
   );
}

export default CardList;
