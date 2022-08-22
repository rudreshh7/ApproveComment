import React from "react";
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
//import faker from 'faker';



const App =() => {
    return (
<div className="ui container comments">
<ApprovalCard>
    Are you Sure?
</ApprovalCard>
<ApprovalCard>
    <CommentDetail 
     author ="Sam" 
     timeAgo="Today at 4:45PM" 
     content="Nice blog post"
     avatar ={faker.image.avatar()}
     />
</ApprovalCard>

<ApprovalCard>
    <CommentDetail 
     author="Alex"
     timeAgo="Today at 3:45PM" 
     content="Great blog post"
     avatar ={faker.image.avatar()}
     />
</ApprovalCard>

<ApprovalCard>
    <CommentDetail 
     author ="Jane" 
     timeAgo="Yesterday at 1:00PM" 
     content="Good blog post"
     avatar ={faker.image.avatar()}
     />
</ApprovalCard>
    
</div>
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'))