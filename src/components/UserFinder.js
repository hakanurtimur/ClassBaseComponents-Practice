import { Fragment, Component } from 'react';
import UsersContext from '../Store/user-context';
import classes from "./UserFinder.module.css"

import Users from './Users';






class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }

    
    }


    componentDidMount() {
        //Send HTTP request..
        this.setState({filteredUsers : this.context.users})

    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value })
            
    }

    
    

    componentDidUpdate (prevProps, prevState) {
        if(prevState.searchTerm !== this.state.searchTerm) {

            this.setState({filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))})

        }

    }


    render() {
        return (
            <Fragment>
            <div className={classes.finder}>
              <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              <Users users={this.state.filteredUsers} />
              </div>
            </Fragment>
          );
    }
    
}




  


export default UserFinder;