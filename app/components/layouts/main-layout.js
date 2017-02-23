import React from 'react';
import RecipeList from '../views/recipe-list';
import Paper from 'MaterialUI/Paper';


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
            imageUrl: 'http://www.seriouseats.com/recipes/assets_c/2016/03/20160328-channa-masala-recipe-6-thumb-1500xauto-430840.jpg'
        }
    ]


export default class MainLayout extends React.Component {

    render() {
        return(
            <div className="main-layout-container">
                <Paper zDepth={2}>
                    <RecipeList recipes={dummyData}/>
                </Paper>
            </div>
        )
        
        
    }
}
