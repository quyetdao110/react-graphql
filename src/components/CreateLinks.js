import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client';

const CREATE_LINK_MUTATION = gql `
    mutation PostMutation(
        $description: String!
        $url: String!
    ){
        post(description: $description, url: $url){
            id
            description
            url
        }
    }
`;

const CreateLinks = () => {
    const [formState, setFormState] = useState({
        description: '',
        url: ''
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            description: formState.description,
            url: formState.url
        }
    });

    return ( <
        div >
        <
        form onSubmit = {
            (e) => {
                e.preventDefault();
                createLink();
            }
        } >
        <
        div className = "flex flex-column mt3" >
        <
        input className = "mb2"
        value = { formState.description }
        onChange = {
            (e) => setFormState({
                ...formState,
                description: e.target.value
            })
        }
        type = "text"
        placeholder = "Write description here" /
        >
        <
        input className = "mb2"
        value = { formState.url }
        onChange = {
            (e) => setFormState({
                ...formState,
                url: e.target.value
            })
        }
        type = "text"
        placeholder = "write or copy the link here" /
        >
        <
        /div> <
        button type = "submit" > Create new < /button>     <
        /form> <
        /div>
    )
}

export default CreateLinks;