import React from 'react';
import { connect } from 'react-redux';
import { LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, expanded } = this.props

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1, paddingLeft: 15 }}>
                        {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render () {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        //console.log(this.props.library.item.id);

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

const mapStateToProps = (state, ownProps) => {
    // this returns plain JS object (state), which will be props for this Component

    // We want to remove all logic from the component and move it here, by adding second argument: ownProps
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    // if ^ is true, expanded = true, else expanded = false

    return { expanded };
}

//export default connect(null, actions)(ListItem);
export default connect(mapStateToProps, actions)(ListItem);
