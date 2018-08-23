import React from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import ListItem from './ListItem'

class LibraryList extends React.Component {
    renderItem (library) {
        return <ListItem library={library} />
    }

    render () {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id}
            />
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
    //console.log('to jest to', state);
}

export default connect(mapStateToProps)(LibraryList);

// Kiedy mamy listę jakichś obiektów i dla kazdego chcemy zrobić komponent poprzez funkcję map, to jest złe dla performance. Do tego służy ListView
