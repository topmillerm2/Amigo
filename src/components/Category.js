import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
	ScrollView,
	TextInput
} from 'react-native';
import { Button, Badge } from 'react-native-elements';

export default class App extends Component {
	state = {
		categories: [
			{ id: 'wk9ut93', category: 'random' },
			{ id: 'alkbnen', category: 'me in 10 years' },
			{ id: 'sfjngks', category: 'TV' },
			{ id: 'assfjas', category: 'Dirty' },
			{ id: 'asfdkjl', category: 'Dating' },
			{ id: 'sdkfljd', category: 'my personality' },
			{ id: 'dslfjsd', category: 'what I eat' },
			{ id: 'sfdjkln', category: 'my music' },
			{ id: 'sjdntkc', category: 'star wars' },
			{ id: 'skfjtbc', category: 'my health' }
		]
	}
	_keyExtractor = (item, index) => item.id;

	renderItem = ({ item }) => {
		return (
			<Button
				title={item.category}
				buttonStyle={styles.option}
				onPress={() => { alert(`you chose "${item.category}" category`) }}
			/>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.counter}>
					<Badge
						value={'user 0'}
						textStyle={{ color: '#F7E7B4' }}
						containerStyle={styles.badge}
					/>
					<Badge
						value={'user 3'}
						textStyle={{ color: '#F7E7B4' }}
						containerStyle={styles.badge}
					/>
				</View>
				<ScrollView
					style={styles.card}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.header}>
						<Text style={{ fontSize: 20 }}>Categories</Text>
					</View>
					<FlatList
						contentContainerStyle={styles.list}
						keyExtractor={this._keyExtractor}
						data={this.state.categories}
						renderItem={this.renderItem}
					/>
				</ScrollView>
				<View style={styles.chat}>
					<Text>CHAT</Text>
					<TextInput
						value={"hello!"}
						style={styles.input}
						onTextChange={() => alert('chat not available yet!')}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	//global
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#DFE2E7',
		paddingTop: 30
	},
	//header
	counter: {
		height: 50,
		justifyContent: 'space-between',
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center',
		backgroundColor: '#83D0CD',
		flexDirection: 'row'
	},
	badge: {
		padding: 10
	},
	//card
	card: {
		flex: 6,
		backgroundColor: '#0D658D',
		margin: 30,
		padding: 20,
		borderRadius: 20
	},
	header: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20
	},
	list: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	option: {
		backgroundColor: '#0099FF',
		width: 250,
		borderRadius: 10,
		margin: 10
	},
	//footer - chat
	chat: {
		height: 100,
		backgroundColor: '#ADD8E6'
	},
	input: {
		backgroundColor: '#96EAD7',
		margin: 10,
		borderRadius: 10,
		padding: 10
	},
});