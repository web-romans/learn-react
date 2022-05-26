import React from 'react';
import './Status.scss'

export default class Status extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className="status">
                {
                    !this.state.editMode
                        ? <div onDoubleClick={this.activateEditMode.bind(this)} className="status__info">{this.props.aboutMe}</div>
                        : <form className="status__form">
                            <input autoFocus onBlur={this.deactivateEditMode.bind(this)} type="text" className="status__text" defaultValue={this.props.aboutMe} />
                        </form>
                }


            </div>
        )
    }

}