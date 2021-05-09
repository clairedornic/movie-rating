import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import FilmDetail from '../components/FilmDetail'
import ListFilm from '../components/ListFilm'
import AddFilm from '../components/AddFilm'

const SearchStackNavigator = createStackNavigator({
    ListFilm: {
        screen: ListFilm,
        navigationOptions: {
            title: 'My List'
        }
    },

    AddFilm: {
        screen: AddFilm,
        navigationOptions: {
            title: 'Add a film'
        }
    },

    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: 'Film'
        }
    }
})

export default createAppContainer(SearchStackNavigator)