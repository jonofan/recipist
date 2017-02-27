import React from 'react';
import Paper from 'MaterialUI/Paper';


export default class RecipeList extends React.Component {
    render() {
        return(
            <div className='recipe-list'>
                {this.props.recipes.map(recipe => {
                    return(

                        <div key={recipe.name} className='recipe-item'>
                            <div className='recipe-item-img-container'>
                                <img className='recipe-item-img' src={recipe.imageUrl} />
                            </div>
                            <div className='recipe-item-info'>
                                <h2>{recipe.name}</h2>
                                <p>{recipe.description}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        )
        
    }
}