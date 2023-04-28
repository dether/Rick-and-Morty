import Card from '../Card/Card';
import { connect } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Favorites = ({ myFavorites}) => {
    const [ aux, setAux] = useState(false);
    const dispatch = useDispatch();
    useSelector((state) => state.myFavorites)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return (
        <div className='Favcontainer'>
            <h1 >My Favorite Characters</h1>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <div className="cards-container">
        {
            myFavorites?.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose={fav.onClose}
                    />
                )
            })
        }

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);