import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
} from 'react-native';
import { Button, Badge } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Chat from './Chat';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';

class Question extends Component {

	state  = {
		chatHeight: 100,
		chooseCardVisible: false,
		layer: 'game'
	}

	
	componentWillMount() {
		console.log(this.props.lastFive, 'lastFive')
	}

	renderChoice = () => {
		if (this.state.chooseCardVisible) {
			return (
				<View style={styles.chooseCard}>
					<Button
						title={'ASK BACK'}
						buttonStyle={styles.choose_button}
						onPress={() => { Actions.dashboard() }}
					/>
					<Button
						title={'NEW QUESTION'}
						buttonStyle={styles.choose_button}
						onPress={() => { Actions.categories()}}
					/>
				</View>
			)
		} 
		return null
	}

	select = (num) => {
		const { questionNumber } = this.props.game.selectedQuestion
		const opponent = this.props.player.selectedPlayer
		const { gameKey } = this.props.game

		if (gameKey) {
			this.props.saveAnswer(num, questionNumber, opponent, gameKey)
		}
		else {
			this.props.creatingGame(num, questionNumber, opponent)
		}
	}

	render() {
		const { option1, option2, option3, option4 } = this.props.game.selectedQuestion.choices
		const { content } = this.props.game.selectedQuestion
		return (
			<View style={styles.container}>
				<View style={styles.counter}>
					<Badge
						value={'user 1'}
						textStyle={{ color: '#F7E7B4' }}
						containerStyle={styles.badge}
					/>
					<Badge
						value={'user 2'}
						textStyle={{ color: '#F7E7B4' }}
						containerStyle={styles.badge}
					/>
				</View>
				<ScrollView
					style={styles.card}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.header}>
						<Text style={{ fontSize: 30 }}>{content}</Text>
					</View>
					<View style={styles.user}>
						<Badge
							value={'Michael\'s answer was...'}
							textStyle={{ color: '#FFF', fontSize: 20 }}
							containerStyle={{ backgroundColor: '#F5D86B' }}
						/>
					</View>
					<View style={styles.options}>
						<Button
							title={this.props.game.selectedQuestion.choices.option1}
							buttonStyle={styles.option}
							onPress={() => { this.select(1) }}
						/>
						<Button
							title={this.props.game.selectedQuestion.choices.option2}
							buttonStyle={styles.option}
							onPress={() => { this.select(2) }}
						/>
						<Button
							title={this.props.game.selectedQuestion.choices.option3}
							buttonStyle={styles.option}
							onPress={() => { this.select(3) }}
						/>
						<Button
							title={this.props.game.selectedQuestion.choices.option4}
							buttonStyle={styles.option}
							onPress={() => { this.select(4) }}
						// onPress={() => {
						// 	this.setState({ chatHeight: this.state.chatHeight === 50 ? 100 : 50, chooseCardVisible: !this.state.chooseCardVisible })
						// }}
						/>
					</View>

				</ScrollView>
				{this.renderChoice()}
				<Chat style={styles.chat} height={this.state.chatHeight} />
			</View>
		)
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
		marginBottom: 10,
		padding: 20,
		borderRadius: 20
	},
	header: {
		flex: 2,
		alignItems: 'center'
	},
	user: {
		justifyContent: 'center'
	},
	options: {
		flex: 4,
		alignItems: 'center'
	},
	option: {
		backgroundColor: '#0099FF',
		width: 250,
		borderRadius: 10,
		margin: 10
	},
	// lower card
	chooseCard: {
		height: 50,
		backgroundColor: '#0D658D',
		flexDirection: 'row',
		margin: 30,
		marginTop: 0,
		marginBottom: 0,
		borderRadius: 10,
		justifyContent: 'space-around',
		alignItems: 'center'

	},
	choose_button: {
		margin: 10,
		padding: 5,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 10,
		backgroundColor: '#0099FF'
	},
	//footer - chat
	chat: {
		marginTop: 10,
		backgroundColor: '#ADD8E6',
	},
	input: {
		backgroundColor: '#96EAD7',
		margin: 10,
		borderRadius: 10,
		padding: 10
	},
});

const mapStateToProps = state => {
	const arr = []
	_.forEach(state.game.lastFive, item => {
		arr.push(item)
	})
	return { game: state.game, player: state.player, lastFive: arr }
}

export default connect(mapStateToProps, actions)(Question);