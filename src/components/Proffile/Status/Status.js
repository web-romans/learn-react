import React from 'react';
import './Status.scss'

export default class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className="status">
                {
                    !this.state.editMode
                        ? <div onDoubleClick={this.activateEditMode} className="status__info">{!this.props.status ? "-------" : this.props.status}</div>
                        : <form className="status__form">
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" className="status__text" defaultValue={this.state.status} />
                        </form>
                }
            </div>
        )
    }

}