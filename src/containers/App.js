import React,{Component} from 'react';
import Cardlist from '../components/Cardlist'
import {robots} from '../robots';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component{
	constructor(){
		super()
		this.state ={
			robots:robots,
			searchfield:''
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
		const{ robots,searchfield}=this.state;
		const filterbot=robots.filter(robots=>{
		return robots.name.toLowerCase().includes(searchfield.toLowerCase())
	})
		if(robots.length==0)
				return <h1>Loading...</h1>
		else{
			return (
				<div className='tc'>
					<h1>Robofriends</h1>
					<Search searchChange={this.onsearchChange}/>
					<Scroll>
					<Cardlist robots={filterbot} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;