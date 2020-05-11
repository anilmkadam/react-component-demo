import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    let commentDetails = [
        {
            author: 'sam',
            avatar: faker.image.avatar(),
            _timestamp: 'Today at 6:00PM',
            text: 'Nice Blog Post'
        },
        {
            author: 'Alex',
            avatar: faker.image.avatar(),
            _timestamp: 'Yesterday at 12:00PM',
            text: 'Informative'
        },
        {
            author: 'Julie',
            avatar: faker.image.avatar(),
            _timestamp: 'Now',
            text: 'Kudos to you'
        },
        {
            author: 'Ryan',
            avatar: faker.image.avatar(),
            _timestamp: 'Today at 11:00AM',
            text: 'Awesome'
        },
        {
            author: 'Cris',
            avatar: faker.image.avatar(),
            _timestamp: '12 Min Ago',
            text: 'Nice! Keep it up.'
        },
        {
            avatar: faker.image.avatar(),
        },
        {

        }
    ];
    var CommentDetailList = commentDetails.map((comment, i) => {
                                return <ApprovalCard> 
                                    <CommentDetail comment={comment} key={i}/>
                                </ApprovalCard> 
                            });
    return (
        <div className="ui container comments">
            
            {
                CommentDetailList
            }            
        </div>
    );
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);