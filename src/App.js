import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import Errorboundary from '../components/Errorbound';
import './App.css';
class App extends Component{
	constructor(){
		super()
		this.state ={
			robots:[],
			searchfield : ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}));
	}

	onsearchChange = (event) =>{
		this.setState({searchfield:event.target.value})

	}

	render() {
		const filterbot=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
		return (
			<div className ='tc'>
				<h1>Robofriends</h1>
				<Search searchChange={this.onsearchChange}/>
				<Scroll>
					<Errorboundary>
						<Cardlist robos={filterbot} />
					</Errorboundary>
				</Scroll>
			</div>
		);
	}
}

export default App;