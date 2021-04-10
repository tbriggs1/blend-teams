import React from 'react';
import {  FormDropdown, Form, FormButton } from '@fluentui/react-northstar'
import { Dropdown, Button } from '@fluentui/react-northstar'

const IndexDropdown = (props) => {
    
    const inputItems = [
        'Learning Plan',
        'Curricula Details',
        'Upcoming Events',
        'Featured Content',
        'Catalog',
        'Custom'
      ]



    return(
        <div>
            <Dropdown
    items={inputItems}
    placeholder="Select your hero"
    checkable
    getA11ySelectionMessage={{
      onAdd: item => `${item} has been selected.`,
      onAdd: item => console.log(props.page),
    }}
  />
        </div>
    )
}

export default IndexDropdown;

