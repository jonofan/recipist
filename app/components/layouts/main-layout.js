import React from 'react';
import RecipeList from '../views/recipe-list';

var dummyData = 
    [
        {
            name: "Toast",
            description: "When you put bread in the toaster it turns into Toast.",
            imageUrl: 'http://chicago-toast.com/img/big-toast-img.png'
        },
        {
            name: "Curry",
            description: "It's yum. The best.",
            imageUrl: 'http://chicago-toast.com/img/big-toast-img.png'
        }
    ]


export default class MainLayout extends React.Component {

    render() {
        return(
            <div>
                <RecipeList recipes={dummyData}/>
            </div>
        )
        
        
    }
}
